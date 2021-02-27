export default function signIn() {
    return new Promise(resolve => { 
        setTimeout(() => {
            resolve({
                token: '157s31938',
                user: {
                    name: 'Saulo do Vale',
                    email: "bispov.oliveira@lprs.com"
                }
            })
        }, 2000)
    })
}