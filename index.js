console.log('Loading function');

exports.handler = async (event, context) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    let headers = event.headers;
    if(typeof headers == 'string') {
        headers = JSON.parse(headers);
    }
    let body = event.body;
    if(typeof body == 'string') {
        body = JSON.parse(body);
    };
    
    let task_name = body.task_name || '';
    let task_data = body.task_data || '';
    switch (task_name) {
        case 'sayhello':
            return sayhello(task_data);
            break;
        
        default:
           let response = {
                statusCode: 404,
                body: JSON.stringify({
                    "message" : `Task ${task_name} not found`
                })
            };
            return response;
    }
};


let sayhello = (task_data) => {
    let name = task_data.name;
    let response = {
        statusCode: 200,
        body: JSON.stringify({
            "message" : `Hello ${name}`
        })
    };
    return response;
}
 