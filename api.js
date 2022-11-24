
//--------------------------------------------------------------------------------------
// Instantiate the CPANEL object.
require("/usr/local/cpanel/javascript/cpanel.js");//Initialize the cpanel object
header('Content-Type: text/plain');
cpanel = new CPANEL();   //connect the cPanel
// call the API
 const createsubDomain= cpanel.api2('SubDomain', 'addsubdomain', 
{
    'domain':'subdomain',
    'rootdomain':'example.com',
    'dir':'/public_html/directory_name',
    'disallowdot':'1' 
});
// Handle the response
if (createsubDomain.cpanelresult.result.status(200)) {
   const data = createsubDomain.json(cpanelresult.result.data);
    console.log(data);
} else {
    console.log(createsubDomain.json(cpanelresult.result.errors));//Printing errors if any
}
cpanel.end(); //Disconnect from cPanel
//--------------------------------------------------------------------------------------


// .........Deployment from github function....................


require("/usr/local/cpanel/javascript/cpanel.js"); //Initalize the cPanel object
header('Content-Type: text/plain');
cpanel = new CPANEL();//connect the cPanel
// Call the API
const gitdeployment = cpanel.api2('VersionControlDeployment', 'create', 
{
    'repository_root':'/home/user/public_html/example'
});
// Handle the response
if (gitdeployment.cpanel.result.status(200)) {
    const data = gitdeployment.json(cpanelresult.result.data);
    console.log(data);
} else {
    console.log(gitdeployment.json(cpanelresult.result.errors)); //Printing errors if any..
}
cpanel.end();//Discoonect from cpanel..
//--------------------------------------------------------------------------------------

