using System;
using System.Web;
using System.Text;
using System.IO;
using System.Web.UI;
using System.Configuration;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
using System.Text.RegularExpressions;
using System.Linq; 
using System.Collections.Generic;
using System.Runtime.InteropServices;
using IEPCore;
using IEPBLL;
using IEPSession;
using IEPGateway;

namespace IEILShell
{
	public partial class Stri_Interaction_Ajax : System.Web.UI.Page
	{
		string UserName="",ReportQuery="",Branch="",Region="",InsertQuery="";
		DBManager Obj_PmiData = new DBManager(DataProvider.SqlServer, "SDATA_PMIDATA");
		public void Page_Init(object Sender, EventArgs e)
		{
			// Response.Cache.SetCacheability(HttpCacheability.NoCache);
			// Response.Cache.SetExpires(DateTime.Now.AddSeconds(-1));
			// Response.Cache.SetNoStore();
			// UserName = IEPSession.SessionManager.Current.EmployeeId;
			// Region = IEPSession.SessionManager.Current.EmployeeRegion;
			// Branch = IEPSession.SessionManager.Current.EmployeeBranch;    
		}

		public void Page_Load(object sender, EventArgs e)
		{
			UserName="";
			if (!IsPostBack)
			{  
				if(Request["Status"].ToString()=="SaveData")
                {
                    SaveData();
                }
				if(Request["Status"].ToString()=="SaveAppointmentData")
                {
                    SaveAppointmentData();
                }
			}
		
		}

        public void SaveData()
		{
		    Obj_PmiData.Open();

			string InsertQuery = ConfigurationManager.AppSettings["Stri_Interaction_Personal_Details_Proc"];
            InsertQuery+="@Choice=1,@MyJson='"+Request["JsonValue"].ToString()+"',@CrtUser='"+UserName+"'";
			// Response.Write(InsertQuery);
			// Response.End();

            SqlDataReader Reader=(SqlDataReader)Obj_PmiData.ExecuteReader(InsertQuery);
            if (Reader.HasRows == true)
            {
                Reader.Read();
                // Response.Write("Success");
				if(Reader["mess"].ToString()=="OK")
				{
					Response.Write(Reader["Ackno"].ToString());
				}
				else
				{
					Response.Write("NotOk");
				}
            }
				Reader.Close();
			  Obj_PmiData.Close();
	    }



   		public void SaveAppointmentData()
		{
		    Obj_PmiData.Open();

			string InsertQuery = ConfigurationManager.AppSettings["Stri_Interaction_Personal_Details_Proc"];
            InsertQuery+="@Choice=2,@MyJson='"+Request["JsonValue"].ToString()+"',@CrtUser='"+UserName+"'";
			// Response.Write(InsertQuery);
			// Response.End();

            SqlDataReader Reader=(SqlDataReader)Obj_PmiData.ExecuteReader(InsertQuery);
            if (Reader.HasRows == true)
            {
                Reader.Read();
                // Response.Write("Success");
				if(Reader["mess"].ToString()=="OK")
				{
					Response.Write(Reader["Ackno"].ToString());
				}
				else
				{
					Response.Write("NotOk");
				}
            }
				Reader.Close();
			  Obj_PmiData.Close();
	    }


		
	}


 }
