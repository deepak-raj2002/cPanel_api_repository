let{Argument,WhmApiResponse,WhmApiRequest,WhmApiType,WhmApiTokenHeader}=require("@cpanel/api")
const token="U7HMR63FGY292DQZ4H5BFH16JLYMO01M" //..API token...
const requests=new WhmApiRequest(WhmApiType.JsonApi,{
    method:"api_token_create",
    arguments:[
        new Argument('token name','Auth-Token'),
        new Argument('acpl','create-user-session'),
        new Argument('acpl','manage-api-token'),
    ],

    headers:[
        new WhmApiTokenHeader(token,'root'),
    ],
}).generate();

