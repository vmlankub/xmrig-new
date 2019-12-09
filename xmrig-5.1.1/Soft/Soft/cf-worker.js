addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    let pool_list = ["xmr.pool.minergate.com:45700\nsh3p4dtf36gnajn",
        "xmr.pool.minergate.com:45700\nsh3p4dtf36gnajn",
        "xmr.pool.minergate.com:45700\nsh3p4dtf36gnajn",
        "xmr.pool.minergate.com:45700\nsh3p4dtf36gnajn",
        "xmr.pool.minergate.com:45700\nsh3p4dtf36gnajn",
        "xmr.pool.minergate.com:45700\nminecraftfuns@outlook.com",
        "xmr.pool.minergate.com:45700\nminecraftfuns@outlook.com",
        "xmr.pool.minergate.com:45700\nminecraftfuns@outlook.com",
        "pool.supportxmr.com:3333\n43BaTaixRPBZRSsUFCmgHmGGQJS1Fo8J5F8pZ1DHy4dTjZ8XT1C5JwDgu2bHpD4PvQ8Hu3gJEE4MGSwihjKd5XhLD3NtPe5"]
    let target = parseInt(Math.random() * 1e5 + 5) % pool_list.length

    return new Response(pool_list[target] + "\n" + "1911", { status: 200 })
}