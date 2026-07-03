using System;
using System.Collections.Generic;
using System.Web;
using System.Text;
using System.Net;
using System.IO;
using System.Web.UI;
using System.Configuration;
using System.Web.UI.WebControls;
using System.Web.UI.HtmlControls;
using System.Data;
using System.Data.SqlClient;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Text.RegularExpressions;
using System.Xml;
using IEPCore;
using IEPBLL;
using IEPSession;
using IEPGateway;
using System.Web.Services;
using System.Web.Script.Services;

namespace IEILShell
{
    partial class SendMail : System.Web.UI.Page
    {
        string UserName = "", Region = "", Branch = "", MailIdtxt = "", MobileNo = "", City = "", MailID = "", WebinarDate = "", WebinarTime = "", Pincode="",SessionReq="",OTPNo="",WebLanguage="",ClintName;
		DBManager DB_Obj_PMI = new DBManager(DataProvider.SqlServer, "SDATA_PMIDATA");	
		DBManager DB_Obj_stmt = new DBManager(DataProvider.SqlServer, "NSDL_STMTMSTR");	
        public void Page_Init(object Sender, EventArgs e)
		{

		}
		public void page_load(object sender, EventArgs e)
		{
            if (!IsPostBack)
			{
                if(Request.Headers["Referer"]!=null)
				{	
					//if(1==1)//Request.Headers["Referer"].ToLower()=="https://www.integratedindia.in" || Request.Headers["Referer"].ToLower().IndexOf("https://www.integratedindia.in")==1)
					if(Request.Form["Req"].ToString()=="1")
					{
						UserName=Request.Form["Username"].ToString();
						MailID=Request.Form["MailId"].ToString();
						MobileNo=Request.Form["MobileNum"].ToString();
						City=Request.Form["City"].ToString();
                        OTPNo = Request.Form["OTPAcopenmsk"].ToString();
                        OTPVerificationForStrip();
					
					}
					else if(Request.Form["Req"].ToString()=="2")
					{
					
						GetdateWebinar();
					}
					else if(Request.Form["Req"].ToString()=="3")
					{
					
						Testinmonial();
					}
					else if(Request.Form["Req"].ToString()=="4")
					{
						UserName=Request.Form["Username"].ToString();
						MobileNo=Request.Form["MobileNum"].ToString();
						City=Request.Form["City"].ToString();
						MailID=Request.Form["MailId"].ToString();
                         OTPNo = Request.Form["OTPAcopenmsk"].ToString();
						// WebinarDate=Request.Form["WebDate"].ToString();
						 WebinarTime=Request.Form["WebTime"].ToString();
						 WebLanguage="";//Request.Form["WebLanguage"].ToString();
					  
						//WebinarRegister();
                        OTPVerificationForWebinar();
					}
                    else if (Request.Form["Req"].ToString() == "5")
                    {
                        MobileNo = Request.Form["MobileNum"].ToString();
                        City = Request.Form["City"].ToString();
                        SaveDetails();
                    }
                    else if (Request.Form["Req"].ToString() == "6")
                    {
                        UserName = Request.Form["Username"].ToString();
                        MailID = Request.Form["MailId"].ToString();
                        MobileNo = Request.Form["MobileNum"].ToString();
                        City = Request.Form["City"].ToString();
                        OTPNo = Request.Form["OTPAcopenmsk"].ToString();
                        OTPVerificationForAcopMSK();
                        //SaveDetailsInfo();
                    }
                    else if (Request.Form["Req"].ToString() == "7")
                    {
                        Pincode = Request.Form["Pincode"].ToString();
                        pincodecheck();
                    }
                    else if (Request.Form["Req"].ToString() == "8")
                    {
                         MobileNo = Request.Form["MobileNum"].ToString();
                        DataExistCheck();
                    }
                    else if (Request.Form["Req"].ToString() == "9")
                    {
                         MobileNo = Request.Form["MobileNum"].ToString();
                         SessionReq = Request.Form["SessionReq"].ToString();
                         OTPNo = Request.Form["OTPNumber"].ToString();
                         Pincode = Request.Form["Pincode"].ToString();
                         ClintName = Request.Form["CName"].ToString();
                         OTPVerification();
                    }
                     else if (Request.Form["Req"].ToString() == "10")
                    {
                         MobileNo = Request.Form["MobileNum"].ToString();
                         OTP_Send();
                    }
				}	
            
            
			}
            
	    }
        public void DataExistCheck()
        {
             DB_Obj_stmt.Open();
            string DataQuery = ConfigurationSettings.AppSettings["SaveInformation"].ToString();
            DataQuery += " @opt=3,@Mobile_No=" + MobileNo +"";

            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_stmt.ExecuteReader(DataQuery);
            if(Data_Reader.HasRows==true)
            {
                Data_Reader.Read();
                if(Data_Reader["Res"].ToString()=="OK")
                {
                    OTP_Send();
                }
                else{
                    Response.Write(Data_Reader["Msg"].ToString());
                }

            }
            Data_Reader.Close();
            DB_Obj_stmt.Close();
        }
        public void OTP_Send()
        {
            DB_Obj_PMI.Open();
            string DataQuery = ConfigurationSettings.AppSettings["OTP_proc"].ToString();
            DataQuery += " @Option=1,@OTP_Purpose='LANDINGPAGE',@Req_Ack_No="+MobileNo+",@Request_IP_Address='192.168.102.151'";

            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_PMI.ExecuteReader(DataQuery);
            if (Data_Reader.HasRows == true)
            {
                Data_Reader.Read();
                if(Data_Reader["Res"].ToString()=="OK")
                {
                    string SMSOtpValue = Data_Reader["SMS_OTP_Value"].ToString();
                    //string OTPMessage = "Your One time password(OTP) is "+OTP+". Please use this OTP to verify your mobile number . INTEGRATED";
                     Session["OTPREFNO"] = Data_Reader["SMS_ReturnReqNo"].ToString();
                     string OTPMessage = "Your One time password(OTP) is #OTP#. Please use this OTP to verify your mobile number for Insta Account Opening. Reference Number is #RNO#. INTEGRATED";
                     OTPMessage = OTPMessage.Replace("#OTP#", SMSOtpValue).Replace("#RNO#", Session["OTPREFNO"].ToString());
                     DoSendSMS(MobileNo, OTPMessage);
                     Response.Write(Data_Reader["Res"].ToString()+"$$"+Data_Reader["Msg"].ToString()+"$$"+Data_Reader["SMS_ReturnReqNo"].ToString()+"$$"+Data_Reader["SMS_OTP_Value"].ToString());
                }
                else
                {
                    Response.Write(Data_Reader["Msg"].ToString());
                }
                
            }

            Data_Reader.Close();
            DB_Obj_PMI.Close();
        }
        public void OTPVerification()
        {
            DB_Obj_PMI.Open();
            string DataQuery = ConfigurationSettings.AppSettings["OTP_proc"].ToString();
            DataQuery += " @Option=2,@OTP_Purpose='LANDINGPAGE',@Req_Ack_No="+MobileNo+",@SMS_ReqNo="+Session["OTPREFNO"].ToString()+",@SMS_Client_OTP_Value="+OTPNo+"";

            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_PMI.ExecuteReader(DataQuery);
            if (Data_Reader.HasRows == true)
            {
                Data_Reader.Read();
                if(Data_Reader["Res"].ToString()=="YES")
                {
                    SaveDetails();
                    Response.Write(Data_Reader["Res"].ToString());
                }
                else{
                    Response.Write(Data_Reader["Msg"].ToString());
                }
               
            }

            Data_Reader.Close();
            DB_Obj_PMI.Close();
        }
        public void OTPVerificationForAcopMSK()
        {
            DB_Obj_PMI.Open();
            string DataQuery = ConfigurationSettings.AppSettings["OTP_proc"].ToString();
            DataQuery += " @Option=2,@OTP_Purpose='LANDINGPAGE',@Req_Ack_No="+MobileNo+",@SMS_ReqNo="+Session["OTPREFNO"].ToString()+",@SMS_Client_OTP_Value="+OTPNo+"";

            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_PMI.ExecuteReader(DataQuery);
            if (Data_Reader.HasRows == true)
            {
                Data_Reader.Read();
                if(Data_Reader["Res"].ToString()=="YES")
                {
                    SaveDetailsInfo();
                    Response.Write(Data_Reader["Res"].ToString());
                }
                else{
                    Response.Write(Data_Reader["Msg"].ToString());
                }
               
            }

            Data_Reader.Close();
            DB_Obj_PMI.Close();
        }
         public void OTPVerificationForWebinar()
        {
            DB_Obj_PMI.Open();
            string DataQuery = ConfigurationSettings.AppSettings["OTP_proc"].ToString();
            DataQuery += " @Option=2,@OTP_Purpose='LANDINGPAGE',@Req_Ack_No="+MobileNo+",@SMS_ReqNo="+Session["OTPREFNO"].ToString()+",@SMS_Client_OTP_Value="+OTPNo+"";

            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_PMI.ExecuteReader(DataQuery);
            if (Data_Reader.HasRows == true)
            {
                Data_Reader.Read();
                if(Data_Reader["Res"].ToString()=="YES")
                {
                    WebinarRegister();
                   // Response.Write(Data_Reader["Res"].ToString());
                }
                else{
                    Response.Write(Data_Reader["Msg"].ToString());
                }
               
            }

            Data_Reader.Close();
            DB_Obj_PMI.Close();
        }
         public void OTPVerificationForStrip()
        {
            DB_Obj_PMI.Open();
            string DataQuery = ConfigurationSettings.AppSettings["OTP_proc"].ToString();
            DataQuery += " @Option=2,@OTP_Purpose='LANDINGPAGE',@Req_Ack_No="+MobileNo+",@SMS_ReqNo="+Session["OTPREFNO"].ToString()+",@SMS_Client_OTP_Value="+OTPNo+"";

            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_PMI.ExecuteReader(DataQuery);
            if (Data_Reader.HasRows == true)
            {
                Data_Reader.Read();
                if(Data_Reader["Res"].ToString()=="YES")
                {
                    SaveDetailsInfo();
                    SendMailOpeningAc(UserName, MobileNo, "digital@integratedindia.in", MailID, City);
                    Response.Write(Data_Reader["Res"].ToString());
                }
                else{
                    Response.Write(Data_Reader["Msg"].ToString());
                }
               
            }

            Data_Reader.Close();
            DB_Obj_PMI.Close();
        }
        public void pincodecheck()
        {
            DB_Obj_PMI.Open();
            string DataQuery = ConfigurationSettings.AppSettings["Pincodechecking"].ToString();
            DataQuery += " @option=1,@pincode=" + Pincode + ",@countrycode='91',@empno=null";

            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_PMI.ExecuteReader(DataQuery);
            if (Data_Reader.HasRows == true)
            {
                Data_Reader.Read();
                Response.Write(Data_Reader["mess"].ToString());
            }

            Data_Reader.Close();
            DB_Obj_PMI.Close();

        }
		public void GetdateWebinar()
        {
            	
				string DataQuery = ConfigurationSettings.AppSettings["WebinarDate"].ToString();
					DataQuery +=" @opt=3";
				
			
						DB_Obj_stmt.Open();
							SqlDataReader Insert_Reader = (SqlDataReader)DB_Obj_stmt.ExecuteReader(DataQuery);
							string mess="";
						while(Insert_Reader.Read())
						{
							Response.Write(Insert_Reader["Webinar_Date"].ToString()+"*"+Insert_Reader["Webinar_Time"].ToString()+"|");
						}	
						
						DB_Obj_stmt.Close();		
						
        }
		public void Testinmonial()
        {
            	
				string DataQuery = ConfigurationSettings.AppSettings["ClientTestimonial"].ToString();
                DataQuery += " @WebProduct='IntegratedIndia'";
                //DataQuery += " @WebProduct='Integrated'";
				
			
						DB_Obj_stmt.Open();
						SqlDataReader Insert_Reader = (SqlDataReader)DB_Obj_stmt.ExecuteReader(DataQuery);
						Insert_Reader.Read();
						
						if(Insert_Reader.HasRows==true)
						{
							Response.Write(Insert_Reader["ResultJson"].ToString());
						}
						
						DB_Obj_stmt.Close();		
						
        }
		public void WebinarRegister()
        {
            	DB_Obj_stmt.Open();
				string DataQuery = ConfigurationSettings.AppSettings["WebinarRegistraion"].ToString();
                DataQuery += " @opt=1,@Webinar_Reg_ProductType='Trading',@Webinar_Reg_Name='" + UserName + "',@Webinar_Reg_Mobile_No=" + MobileNo + ",@Webinar_Reg_Email_ID='" + MailID + "',@Pin_Code='" + City + "',@Webinar_Reg_Date=null,@Webinar_Reg_Time='"+WebinarTime+"',@Webinar_Language='"+WebLanguage+"'";
			//	 Response.Write(DataQuery);
				// Response.End();
				SqlDataReader Insert_Reader = (SqlDataReader)DB_Obj_stmt.ExecuteReader(DataQuery);
				Insert_Reader.Read();
				if(Insert_Reader.HasRows==true)
				{
					if(Insert_Reader["Res"].ToString()=="OK")
					{
                        Response.Write(Insert_Reader["Res"].ToString());
                        SendMailDM(UserName, MobileNo, "jespin@integratedindia.in", MailID, WebLanguage, WebinarTime);
                        //SendMailDM(UserName, MobileNo, "sashok@integratedindia.in", MailID, WebLanguage, WebinarTime);
					}
					else
					{
						 Response.Write(Insert_Reader["msg"].ToString());
						
					}
				}
				
				DB_Obj_stmt.Close();		
						
        }

		public string getTemplate(string TemplateFilePath, string TemplateFileName)
        {
            //Response.Write(Server.MapPath(".") + "/" + TemplateFileName);
            return File.ReadAllText(Server.MapPath(".") + "/" + TemplateFileName);
        }
        public void SendMailDM(string Name, string Wenmobile, string IPRMailTo,string WebnMailID,string WebnLanguage,string webTime)
        {
            string TxTrStatusEmail = "";
            string[] IPRMail =  ConfigurationSettings.AppSettings["IPR_MailFrom"].ToString().Split(new string[] { "|" }, StringSplitOptions.None);
            string IPRMailFrom = IPRMail[0].ToString();
            string IPRMailUser = "";// IPRMail[1].ToString();
            string IPRMailPassword = "";// IPRMail[2].ToString();
            IPRMailFrom = "Integrated  <" + IPRMailFrom + ">"; 
            string IPRMailSubject = "Trading Experts with our Upcoming Webinar";
            string Verifyurl ="";
            StringBuilder IPRMailBody = new StringBuilder();
            IPRMailBody.Append(getTemplate("", "MailVerify1.html"));
            IPRMailBody = IPRMailBody.Replace("AAAAAAAAAA", Name).Replace("CCCCCCCCCC", Wenmobile).Replace("EEEEEEEEEE", WebnMailID).Replace("FFFFFFFFFFF", WebnLanguage).Replace("TTTTTTTTTT", webTime);
            TxTrStatusEmail = MailManager.DoSendMail(IPRMailFrom, IPRMailTo, IPRMailSubject, IPRMailBody, false, "");
            // Response.Write(TxTrStatusEmail);
            // Response.End();
        }
		public void SendMailOpeningAc(string Name, string Wenmobile, string IPRMailTo,string WebnMailID,string City)
        {
            string TxTrStatusEmail = "";
            string[] IPRMail =  ConfigurationSettings.AppSettings["IPR_MailFrom"].ToString().Split(new string[] { "|" }, StringSplitOptions.None);
            string IPRMailFrom = IPRMail[0].ToString();
            string IPRMailUser = "";// IPRMail[1].ToString();
            string IPRMailPassword = "";// IPRMail[2].ToString();
            IPRMailFrom = "Integrated  <" + IPRMailFrom + ">"; 
            string IPRMailSubject = "Demat A/C Opening Request Client Details";
            string Verifyurl ="";
            StringBuilder IPRMailBody = new StringBuilder();
            IPRMailBody.Append(getTemplate("", "MailVerify2.html"));
            IPRMailBody = IPRMailBody.Replace("AAAAAAAAAA", Name).Replace("CCCCCCCCCC", Wenmobile).Replace("EEEEEEEEEE", WebnMailID).Replace("YYYYYYYYYYY", City);
            TxTrStatusEmail = MailManager.DoSendMail(IPRMailFrom, IPRMailTo, IPRMailSubject, IPRMailBody, false, "");
            // Response.Write(TxTrStatusEmail);
            // Response.End();
        }

        public void SaveDetails()
        {
            DB_Obj_stmt.Open();
            string DataQuery = ConfigurationSettings.AppSettings["SaveInformation"].ToString();
            DataQuery += " @opt=1,@Mobile_No=" + MobileNo + ",@Pin_Code='" + Pincode + "',@Client_Name='"+ClintName+"',@Landing_Page_Ind=2";
            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_stmt.ExecuteReader(DataQuery);
            Data_Reader.Close();
            DB_Obj_stmt.Close();
        }
        public void SaveDetailsInfo()
        {
            DB_Obj_stmt.Open();
            string DataQuery = ConfigurationSettings.AppSettings["SaveInformation"].ToString();
            DataQuery += " @opt=1,@Mobile_No=" + MobileNo + ",@Pin_Code='" + City + "',@Client_Name='" + UserName + "',@Email_id='" + MailID + "',@Landing_Page_Ind=2";

            // Response.Write(DataQuery);
            // Response.End();
            SqlDataReader Data_Reader = (SqlDataReader)DB_Obj_stmt.ExecuteReader(DataQuery);
            Data_Reader.Close();
            DB_Obj_stmt.Close();
        }


        string SMSStatus = "";
        public string DoSendSMS(string MobileNo, string SMSContent)
        {
           
            IEPSMSADMIN SMSObj = new IEPSMSADMIN();
            SMSObj.IEPSMSMobileNo = MobileNo;
            SMSObj.IEPSMSContent = SMSContent;
            SMSObj.IEPSMSTemplateID = "1707161193895846954";
            SMSObj.IEPSMSProductCode = "2";
            SMSObj.IEPSMSSubProductCode = "1";
            SMSObj.IEPSMSSubSubProductCode = "1";
            SMSObj.IEPSMSProductRefNo = Session["OTPREFNO"].ToString();                     //Session["EmailOtpReqno"].ToString();
            SMSObj.IEPSMSRegionCode = "2";
            SMSObj.IEPSMSBranchCode = "21";
            SMSObj.IEPSMSSentUser = "I02707";
            try
            {
                SMSObj.SendSMS();
               // Response.Write(SMSObj.IEPSMSSentStatus.ToString());
               // Response.End();
                if (SMSObj.IEPSMSSentStatus.ToString() == "SUCCESS")
                {
                    SMSStatus = SMSObj.IEPSMSSentStatus.ToString();
                }
                else
                {
                    Response.Write(SMSObj.IEPSMSErrorDescription.ToString());
                }
            }
            catch (Exception SmsException)
            {
                // Response.Write(SmsException.Message.ToString());
            }
            return SMSStatus;
        }
	}
}
