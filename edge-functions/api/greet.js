export async function onRequestPost(context) {
    const {name} = await context.request.json()

    const data = {
        message: `Halo ${name || 'Pengunjung'}! 
        Salam dari Edge Function di ${context.request.cf?.city || 'lokasi yang dekat denganmu'}!`,
        timestamp: new Date().toISOString(),
        clientIP : context.request.headers.get('cf-connecting-ip')
    }

    return new Response(JSON.stringify(data, null, 2), {
        status: 200,
        headers: {
            'Content-Type' : 'application/json; charset=UTF-8',
            'Access-Control-Allow-Origin' : '*'
        }
    })
    
}

export async function onRequestGet(context){
    const data = {
        instruction : 'Kirim POST request dengan JSON body {"name" : "Nama Anda"}',
        endpoint: 'api/greet'
    }

    return new Response(JSON.stringify(data, null, 2), {
        headers: {'Content-Type': 'application/json'}
    })
}