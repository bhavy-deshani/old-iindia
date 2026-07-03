//Allow Number Only 
$(document).on('input', ".NumberJs" , function() 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if(this.maxLength == "2147483647")
        if (this.value.length > 10) this.value = this.value.slice(0, 10);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});

//$(document).blur('input', ".NumberJs" , function() 
$(".NumberJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//Client Id Key Press 
//$(".ClientidJs").on('input', function (event) 
$(document).on('input', ".ClientidJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 8) this.value = this.value.slice(0, 8);
});
$(".ClientidJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//Mobile No Key Press 
//$("input[class='MobilenoJs']").on('input', function (event) 
//$(".MobilenoJs").on('input', function (event) 
$(document).on('input', ".MobilenoJs" , function()
{
    //alert(1)
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 10) this.value = this.value.slice(0, 10);
});
$(".MobilenoJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//Phone No Key Press 
//$(".PhonenoJs").on('input', function (event) 
$(document).on('input', ".PhonenoJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 11) this.value = this.value.slice(0, 11);
});
$(".PhonenoJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//Fax Key Press 
//$(".FaxnoJs").on('input', function (event) 
$(document).on('input', ".FaxnoJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 11) this.value = this.value.slice(0, 11);
});
$(".FaxnoJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//PRAN No Key Press 
//$(".PrannoJs").on('input', function (event) 
$(document).on('input', ".PrannoJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 12) this.value = this.value.slice(0, 12);
});
$(".PrannoJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//EIA No Key Press
//$(".EianoJs").on('input', function (event) 
$(document).on('input', ".EianoJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if(this.maxLength == "2147483647")
        if (this.value.length > 10) this.value = this.value.slice(0, 10);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);

});
$(".EianoJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
}); 
 
//CKYC No Key Press
//$(".CkycnoJs").on('input', function (event) 
$(document).on('input', ".CkycnoJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if(this.maxLength == "2147483647")
        if (this.value.length > 10) this.value = this.value.slice(0, 10);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});
$(".CkycnoJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});  

//Pincode Key Press  
//$(".PincodeJs").on('input', function (event) 
$(document).on('input', ".PincodeJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 6) this.value = this.value.slice(0, 6);
});
$(".PincodeJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//Cust Id Key Press
//$(".CustidJs").on('input', function (event) 
$(document).on('input', ".CustidJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 7) this.value = this.value.slice(0, 7);
});
$(".CustidJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//Aadhaar Id Key Press
//$(".AadhaaridJs").on('input', function (event) 
$(document).on('input', ".AadhaaridJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if(this.maxLength == "2147483647")
        if (this.value.length > 12) this.value = this.value.slice(0, 12);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});
$(".AadhaaridJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//UUid Key Press
//$(".UuidJs").on('input', function (event) 
$(document).on('input', ".UuidJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 16) this.value = this.value.slice(0, 16);
});
$(".UuidJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//UUid Key Press
//$(".ChequenoJs").on('input', function (event) 
$(document).on('input', ".ChequenoJs" , function()
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
    if (this.value.length > 6) this.value = this.value.slice(0, 6);
});
$(".ChequenoJs").blur('input', function (event) 
{
    var NumVal = this.value.replace(/[^0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NumVal);
});

//Float Key Press
//$(".FloatnoJs").on('input', function (event) 
$(document).on('input', ".FloatnoJs" , function()
{
    var FloatVal = this.value.replace(/[^0-9._]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(FloatVal);
    var original='';
    $(this).on('input', function() 
    {
        if ($("#"+this.id).val().replace(/[^.]/g, "").length > 1)
        {
            $("#"+this.id).val(original); 
        }
        else
        {
            original = $("#"+this.id).val();
        }
    });
    if(this.maxLength == "2147483647")
        if (this.value.length > 10) this.value = this.value.slice(0, 10);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});

//PAN No Key Press 
//$(".PannoJs").on('input', function (event) 
$(document).on('input', ".PannoJs" , function()
{
    var PanNoVal = this.value.replace(/[^a-z|A-Z|0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(PanNoVal);   
    if (this.value.length > 10) this.value = this.value.slice(0, 10);
});

//TAN No Key Press 
//$(".TannoJs").on('input', function (event) 
$(document).on('input', ".TannoJs" , function()
{
    var TanNoVal = this.value.replace(/[^a-z|A-Z|0-9]/g, '').toUpperCase();
    //$("#"+this.id).val("")
    $("#"+this.id).val(TanNoVal);   
    if (this.value.length > 10) this.value = this.value.slice(0, 10);
});

//Emp Id Key Press 
//$(".EmpidJs").on('input', function (event) 
$(document).on('input', ".EmpidJs" , function()
{
    var EmpidVal = this.value.replace(/[^a-z|A-Z|0-9]/g, '').toUpperCase();
    //$("#"+this.id).val("")
    $("#"+this.id).val(EmpidVal);   
    if (this.value.length > 6) this.value = this.value.slice(0, 6);
});

//ISL Code Key Press
//$(".IslcodeJs").on('input', function (event) 
$(document).on('input', ".IslcodeJs" , function()
{
    var IslcodeVal = this.value.replace(/[^a-z|A-Z|0-9]/g, '').toUpperCase();
    //$("#"+this.id).val("")
    $("#"+this.id).val(IslcodeVal);   
    if (this.value.length > 9) this.value = this.value.slice(0, 9);
});

//Dp Id Key Press
//$(".DpidJs").on('input', function (event) 
$(document).on('input', ".DpidJs" , function()
{
    var DpidVal = this.value.replace(/[^a-z|A-Z|0-9]/g, '').toUpperCase();
    //$("#"+this.id).val("")
    $("#"+this.id).val(DpidVal);   
    if (this.value.length > 8) this.value = this.value.slice(0, 8);
});

//IFSC Code Key Press 
//$(".IfsccodeJs").on('input', function (event) 
$(document).on('input', ".IfsccodeJs" , function()
{
    var IfscCodeVal = this.value.replace(/[^a-z|A-Z|0-9]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(IfscCodeVal);   
    if (this.value.length > 11) this.value = this.value.slice(0, 11);
});

//Micr Code Key Press 
//$(".MicrcodeJs").on('input', function (event) 
$(document).on('input', ".MicrcodeJs" , function()
{
    var MicrCodeVal = this.value.replace(/[^0-9]/g, '');;
    //$("#"+this.id).val("")
    $("#"+this.id).val(MicrCodeVal);   
    if(this.maxLength == "2147483647")
        if (this.value.length > 14) this.value = this.value.slice(0, 14);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});

//Email Id Key Press
//$(".EmailidJs").on('input', function (event) 
$(document).on('input', ".EmailidJs" , function()
{
    var EmailidVal = this.value.replace(/[^a-z|A-Z|0-9|$&+,:;=?@#<>_.-~^*()%!-]/g, '');        
    //$("#"+this.id).val("")
    $("#"+this.id).val(EmailidVal);  
    if (this.value.length > 50) this.value = this.value.slice(0, 50);
});

//UPI Key Press
//$(".UpiidJs").on('input', function (event) 
$(document).on('input', ".UpiidJs" , function()
{
    var UpidVal = this.value.replace(/[^a-z|A-Z|0-9|@_.-]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(UpidVal); 
    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});

//Name Key Press
//$(".NameJs").on('input', function (event) 
$(document).on('input', ".NameJs" , function()
{
    var NameVal = this.value.replace(/[^a-zA-Z ]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(NameVal); 
    if(this.maxLength == "2147483647")
    if (this.value.length > 25) this.value = this.value.slice(0, 25);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
        
});

//Bank Name Key Press
//$(".BankNameJs").on('input', function (event) 
$(document).on('input', ".BankNameJs" , function()
{
    var BankNameVal = this.value.replace(/[^a-z|A-Z|0-9| ]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(BankNameVal); 
    if(this.maxLength == "2147483647")
    if (this.value.length > 35) this.value = this.value.slice(0, 35);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});

//Address Key Press
//$(".AddressJs").on('input', function (event) 
$(document).on('input', ".AddressJs" , function()
{
    //var AddrVal = this.value.replace(/[^a-z|A-Z|0-9|$&+,:;=?@<>_ .-~^*()%!-]/g, '').toUpperCase();
    var AddrVal = this.value.replace(/[^/a-z,A-Z,0-9$&+,:;=?@<>_ .~^*()%!-]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(AddrVal);
    if(this.maxLength == "2147483647")
        if (this.value.length > 36) this.value = this.value.slice(0, 36);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});


//City Key Press
//$(".CityJs").on('input', function (event) 
$(document).on('input', ".CityJs" , function()
{
    //var CityVal = this.value.replace(/[^a-z|A-Z|0-9|$&+,:;=?@#<>_ .-~^*()%!-]/g, '').toUpperCase();
    var CityVal = this.value.replace(/[^a-z|A-Z| ]/g, '').toUpperCase();
    //$("#"+this.id).val("")
    $("#"+this.id).val(CityVal);   
    if(this.maxLength == "2147483647")
        if (this.value.length > 36) this.value = this.value.slice(0, 36);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});

//Date Key Press
//$(".DateJs").on('input', function (event) 
$(document).on('input', ".DateJs" , function()
{
    var DateVal = this.value.replace(/[^0-9|/]/g, '');
    //$("#"+this.id).val("")
    $("#"+this.id).val(DateVal);   
    if (this.value.length > 10) this.value = this.value.slice(0, 10);
});

//Address Proof Key Press 
$(document).on('input', ".AddrPrfJs" , function()
{
    var AddrPrfVal = this.value.replace(/[^a-z|A-Z|0-9]/g, '').toUpperCase();
    //$("#"+this.id).val("")
    $("#"+this.id).val(AddrPrfVal);   
    if(this.maxLength == "2147483647")
        if (this.value.length > 36) this.value = this.value.slice(0, 15);
    else
        if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
});