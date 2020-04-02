const _console = new console.Console(process.stdout, process.stderr);

_console.xinfo = (msg = '') => {
    const type = typeof msg;
    if(type === 'number')
        console.info('[info number] => %d', msg);
    else if(type === 'object')
        console.info('[info json] => %j', msg);
    else
        console.info('[info string] => %s', msg);
    
}
_console.xwarn = (msg = '') => {
    const type = typeof msg;
    if(type === 'number')
        console.warn('[warn number] => %d', msg);
    else if(type === 'object')
        console.warn('[warn json] => %j', msg);
    else
        console.warn('[warn string] => %s', msg);
    
}
_console.xerror = (msg = '') => {
    const type = typeof msg;
    if(type === 'number')
        console.error("[error number] => %d", msg);
    else if(type === 'object')
        console.error("[error json] => %j", msg);
    else
        console.error("[error string] => %s", msg);
}

_console.xinfo('Esto es un info')
_console.xinfo(30)
_console.xinfo({"Nombre":"Carlos Ramírez"})

_console.xwarn('Esto es un warn')
_console.xwarn(20)
_console.xwarn({"warning":"Validar funcion"})

_console.xerror('Esto es un error')
_console.xerror(10)
_console.xerror({"error":"error 404", "line":50})
