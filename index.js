export const handler = async(event) => {
    console.log(event.body);
    const TASKS = {
        SAYHELLO : "sayhello"
    }
    let body = event.body;
    try { body = JSON.parse(event.body) } catch(e) { console.error(e)};
    let task_name = body.task_name || "";
    let task_data = body.task_data || {};
    switch(task_name) {
        case TASKS.SAYHELLO :
            return sayHello(task_data);
        default:
            return {
                statusCode: 404,
                body: JSON.stringify({
                    "message" : `task  ${task_name} not found`
                })
            }
    }
};



let sayHello = (task_data) => {
    let name = task_data.name || "";
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            "message" : `Hello ${name}`
        })
    };
    return response;
}