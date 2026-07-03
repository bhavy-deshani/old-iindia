
var Referal="",EmpId="",CustId="",ReferName="",Comments="";
// function selectServiceType(type)
// {
//     if(type=="financial")
//     {
//         ServiceType="Financial information";
//     }
//     else if(type=="additional")
//     {
//         ServiceType="Non-financial Interests";
//     }
//     else if(type=="both")
//     {
//         ServiceType="Both";
//     }
// }

function SaveClick()
{
    
    if($("#HideType").val()=="financial")
    {
        ServiceType="Financial information";
        Referal=$("#referralSource-financial").val().trim()
        EmpId=$("#employeeId-financial").val().trim()
        CustId=$("#customerId-financial").val().trim()
        ReferName=$("#referralDetails-financial").val().trim()
        // Comments=$("#referralDetails-both").val().trim()
    }
    else if($("#HideType").val()=="additional")
    {
        ServiceType="Non-financial Interests";
        Referal=$("#referralSource-additional").val().trim()
        EmpId=$("#employeeId-additional").val().trim()
        CustId=$("#customerId-additional").val().trim()
        ReferName=$("#referralDetails-additional").val().trim()
        Comments=$("#comments").val().trim()
    }
    else if($("#HideType").val()=="both")
    {
        ServiceType="Both";
        Referal=$("#referralSource-both").val().trim()
        EmpId=$("#employeeId-both").val().trim()
        CustId=$("#customerId-both").val().trim()
        ReferName=$("#referralDetails-both").val().trim()
        Comments=$("#comments-both").val().trim()
    }
    

    var Dob=$("#dob").val().trim();
    var NewDob=Dob.split('-');
    var FormattedDate=NewDob[2]+NewDob[1]+NewDob[0]
    //alert(FormattedDate)
    
    const jsonDataObj = 
    {
        FirstName: $("#name").val().trim(),
        Phone: $("#phone").val().trim(),
        Pincode: $("#pincode").val().trim(),
        Email: $("#email").val().trim(),
        DOB: FormattedDate,
        Marital_Status: $("#maritalStatus").val().trim(),
        Service_Typ: ServiceType.trim(),
        Invest_Exp: [],
        interest_in: [],
        Mode_Learn: [],
        Non_Financial: [],
        User_Comments: Comments === "" ? "" : Comments,
        Hear_Aboutus: Referal,
        Refer_EmpId: EmpId === "" ? "" : EmpId,
        Refer_FullName: CustId === "" ? "" : CustId,
        Specify_Details: ReferName === "" ? "" : ReferName,
        Ack_no:""
    };

    document.querySelectorAll('.InvExpChkCls .selected input[type="checkbox"]').forEach(input => {
        jsonDataObj.Invest_Exp.push({ Name: input.value,Code: input.dataset.attr });
    });

    document.querySelectorAll('.IntrestedExp .selected input[type="checkbox"]').forEach(input => {
        jsonDataObj.interest_in.push({Name: input.value,Code: input.dataset.attr });
    });

    document.querySelectorAll('.ModeLearn .selected input[type="checkbox"]').forEach(input => {
        jsonDataObj.Mode_Learn.push({Name: input.value,Code: input.dataset.attr});
    });

    document.querySelectorAll('.NonFinancialInterest .selected input[type="checkbox"]').forEach(input => {
        jsonDataObj.Non_Financial.push({Name: input.value,Code: input.dataset.attr});
    });

    // console.log(jsonDataObj);
    var FullJsonData=JSON.stringify(jsonDataObj);
    // alert(FullJsonData)


    var Param = "Status=SaveData&JsonValue="+FullJsonData;
    InitSmartAjax("POST","Stri_Interaction_Ajax.aspx", Param, "application/x-www-form-urlencoded", "text", loadDoc, Failure);         
    function loadDoc(Data, status)
     {
        if (Data != "")  
        {
            // alert(Data)
            if(Data!="NotOk")
            {
                document.getElementById('tokenNumber').textContent = 'ACK-'+Data;
                $("#AckHide").val(Data)
            }
        }
    }
    function Failure() {
      alert("Fail");
    }

    
}
    



// Yearfunc(22 jan)

// function Yearfunc(ddt) {
//     const today = new Date();
//     const currentYear = today.getFullYear();
//     const selecteddate = new Date(`${ddt}, ${currentYear}`);

//     if (selecteddate < new Date(today.setDate(today.getDate() - 1))) {
//         return currentYear + 1
//     } else {
//         return currentYear
//     }
// }

var DateTxt="",TimeTxt=""
function SaveAppointment()
{
    const selectedDiv = document.querySelector('#dateOptionsLater > .selected');

    if (selectedDiv) {
    // const dayName = selectedDiv.querySelector('.day-name')?.textContent.trim() || '';
    const dateNumber = selectedDiv.querySelector('.date-number')?.textContent.trim() || '';
    const monthName = selectedDiv.querySelector('.month-name')?.textContent.trim() || '';
    DateTxt=dateNumber.trim()+" "+monthName.trim();

    } 
   
    const selectedDivs = document.querySelectorAll('#timeSlotsLater div.selected:not(.disabled)');

    selectedDivs.forEach(div => {
        const text = div.textContent.trim();
        TimeTxt=text;

    });


    const jsonDataObj = 
    {
        Ack_no: $("#AckHide").val().trim(),
        ScheduleDate: DateTxt,
        ScheduleTime: TimeTxt 
    };
    var AppointmentFullJsonData=JSON.stringify(jsonDataObj);

    var Param = "Status=SaveAppointmentData&JsonValue="+AppointmentFullJsonData;
    InitSmartAjax("POST","Stri_Interaction_Ajax.aspx", Param, "application/x-www-form-urlencoded", "text", loadDoc, Failure);         
    function loadDoc(Data, status)
    {

    }
     function Failure()
     {
        alert("Fail")
     }

    // alert(DateTxt)
    // alert(TimeTxt)

}