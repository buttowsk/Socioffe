
/*
    let valores = {
        'nome': [],
        'icone': [],
        'imagem': [],
        'post': {
            'conteudo': [],
            'titulo': []
        }
    }*/

    

    /*
    function gerarImagemPost () {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((json) => {valores.imagem.push(json.message)})
    }


    function gerarConteudoPost() {
        fetch ('https://dummyjson.com/posts')
            .then((resp) => resp.json())
            .then((resp) => resp.posts.map(post => {
                
                gerarDivs()
            }))

    }



    function gerarNomeIcone (id) {
        fetch(`https://dummyjson.com/users/${id}`)
            .then(response => response.json())
            .then(respJson => {
            valores.icone.push(respJson.image)
            valores.nome.push(respJson.firstName)
            })

    }



    function settarAutorPost (id) {
        const imgAutor = document.getElementById("iconeAutor")
        const nomeAutor = document.getElementById("nomeAutor")

        fetch(`https://dummyjson.com/users/${id}`)
            .then((response) => response.json())
            .then((arquivoJson) => {
                imgAutor.src = arquivoJson.image
                nomeAutor.innerText = arquivoJson.firstName + ' ' + arquivoJson.lastName
            })
            .catch((e) => console.log(e))
    }


  
    function preencherTela () {
        fetch('https://dummyjson.com/users')
            .then ((response) => response.json())
            .then ((responJson) => {
                responJson.users.forEach(element => {
                    gerarDivs(element.image, element.firstName,)
                })
            })
    
    }
    

    function gerarDivs (iconeDoAutor, nomeDoAutor, imgDoPost, tituloDoPost, conteudoDoPost) {
        //////////////////////// DIV POST
        const body = document.body
        const main = document.getElementById('main')
        const divPost = document.createElement('div')
        divPost.setAttribute('class', 'post')
        main.appendChild(divPost)
        ///////////////
        ///////////////////////////// DIV AUTOR POST
        const divAutor = document.createElement('div')
        divAutor.setAttribute('class', 'autorPost')
        const iconeAutor = document.createElement('img')
        iconeAutor.setAttribute('class', 'iconeAutorPost')
        iconeAutor.setAttribute('id', 'iconeAutor')
        const nomeAutor = document.createElement('b')
        nomeAutor.setAttribute('id', 'nomeAutor')
        divAutor.appendChild(iconeAutor)
        divAutor.appendChild(nomeAutor)
        ///////////////////////////
        const containerImgPost = document.createElement('div')
        containerImgPost.setAttribute('class', 'container-imagemPost')
        const imgPost = document.createElement('img')
        imgPost.setAttribute('src', '')
        imgPost.setAttribute('id', 'imgPost')
        containerImgPost.appendChild(imgPost)
        //////////////
        const iconesPost = document.createElement('ul')
        iconesPost.setAttribute('class', 'iconesPost')
        const liIconesPost1 = document.createElement('li')
        const liIconesPost2 = document.createElement('li')
        const liIconesPost3 = document.createElement('li')
        const liIconesPost4 = document.createElement('li')
        liIconesPost4.setAttribute('id', 'iconeSalvar')
        iconesPost.appendChild(liIconesPost1)
        iconesPost.appendChild(liIconesPost2)
        iconesPost.appendChild(liIconesPost3)
        iconesPost.appendChild(liIconesPost4)
        /////
        const divTituloPost = document.createElement('div')
        divTituloPost.setAttribute('class', 'container-textoPost')
        const tituloPost = document.createElement('h1')
        tituloPost.setAttribute('class', 'titulo')
        const conteudoPost = document.createElement('p')
        conteudoPost.setAttribute('class', 'conteudo')
        divTituloPost.appendChild(tituloPost)
        divTituloPost.appendChild(conteudoPost)
        //////////////////
        

        divPost.appendChild(divAutor)
        divPost.appendChild(containerImgPost)
        divPost.appendChild(iconesPost)
        divPost.appendChild(divTituloPost)
        /////////////////////////

        iconeAutor.src = iconeDoAutor
        nomeAutor.innerText = nomeDoAutor
        imgPost.src = imgDoPost
        tituloPost.innerText = tituloDoPost
        conteudoPost.innerText = conteudoDoPost

        liIconesPost1.innerHTML = `<iconify-icon icon="icon-park-solid:like" style="color: #17453E;" width="35" height="35"></iconify-icon>`
        liIconesPost2.innerHTML = `<iconify-icon icon="fa-solid:comments" style="color: #17453E;" width="35" height="35"></iconify-icon>`
        liIconesPost3.innerHTML = `<iconify-icon icon="carbon:send-alt-filled" style="color: #17453E;" width="35" height="35"></iconify-icon>`
        liIconesPost4.innerHTML = `<iconify-icon icon="heroicons-outline:save" style="color: #17453E;" width="35" height="35"></iconify-icon>`

    }

*/
    /*
    function settarPost () {
        let idPost = Math.floor(Math.random() * 100)
        const imgPost = document.getElementById("imgPost")
        const tituloPost = document.getElementById("titulo")
        const conteudoPost = document.getElementById("conteudo")

        fetch(`https://dummyjson.com/posts/${idPost}`)
            .then((response) => response.json())
            .then((json) => {
                tituloPost.innerText = json.title
                conteudoPost.innerText = json.body
                settarAutorPost(json.userId)
            })
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((response) => response.json())
            .then((json) => imgPost.src = json.message)
    }*/

  

    function settarUsuarioAtual () {
        //let id = Math.floor(Math.random() * 100)
        let id = 24
        const iconeUser = document.getElementById('fotoUsuario')

        fetch(`https://dummyjson.com/users/${id}`)
            .then ((response) => response.json())
            .then ((respJson) => {
                iconeUser.innerHTML = `<img src="${respJson.image}">`
            })
    }


    const urls = [
        'https://dummyjson.com/posts',
        'https://dummyjson.com/users'
    
    ]
    
    
    
        
 
         function gerarDivs (iconeDoAutor, nomeDoAutor, imgDoPost, tituloDoPost, conteudoDoPost) {
            //////////////////////// DIV POST
            const body = document.body
            const main = document.getElementById('main')
            const divPost = document.createElement('div')
            divPost.setAttribute('class', 'post')
            main.appendChild(divPost)
            ///////////////
            ///////////////////////////// DIV AUTOR POST
            const divAutor = document.createElement('div')
            divAutor.setAttribute('class', 'autorPost')
            const iconeAutor = document.createElement('img')
            iconeAutor.setAttribute('class', 'iconeAutorPost')
            iconeAutor.setAttribute('id', 'iconeAutor')
            const nomeAutor = document.createElement('b')
            nomeAutor.setAttribute('id', 'nomeAutor')
            divAutor.appendChild(iconeAutor)
            divAutor.appendChild(nomeAutor)
            ///////////////////////////
            const containerImgPost = document.createElement('div')
            containerImgPost.setAttribute('class', 'container-imagemPost')
            const imgPost = document.createElement('img')
            imgPost.setAttribute('src', '')
            imgPost.setAttribute('id', 'imgPost')
            containerImgPost.appendChild(imgPost)
            //////////////
            const iconesPost = document.createElement('ul')
            iconesPost.setAttribute('class', 'iconesPost')
            const liIconesPost1 = document.createElement('li')
            const liIconesPost2 = document.createElement('li')
            const liIconesPost3 = document.createElement('li')
            const liIconesPost4 = document.createElement('li')
            liIconesPost4.setAttribute('id', 'iconeSalvar')
            iconesPost.appendChild(liIconesPost1)
            iconesPost.appendChild(liIconesPost2)
            iconesPost.appendChild(liIconesPost3)
            iconesPost.appendChild(liIconesPost4)
            /////
            const divTituloPost = document.createElement('div')
            divTituloPost.setAttribute('class', 'container-textoPost')
            const tituloPost = document.createElement('h1')
            tituloPost.setAttribute('class', 'titulo')
            const conteudoPost = document.createElement('p')
            conteudoPost.setAttribute('class', 'conteudo')
            divTituloPost.appendChild(tituloPost)
            divTituloPost.appendChild(conteudoPost)
            //////////////////
            
    
            divPost.appendChild(divAutor)
            divPost.appendChild(containerImgPost)
            divPost.appendChild(iconesPost)
            divPost.appendChild(divTituloPost)
            /////////////////////////
    
            iconeAutor.src = iconeDoAutor
            nomeAutor.innerText = nomeDoAutor
            imgPost.src = imgDoPost
            tituloPost.innerText = tituloDoPost
            conteudoPost.innerText = conteudoDoPost
    
            liIconesPost1.innerHTML = `<iconify-icon icon="icon-park-solid:like" style="color: #17453E;" width="28" height="28"></iconify-icon>`
            liIconesPost2.innerHTML = `<iconify-icon icon="fa-solid:comments" style="color: #17453E;" width="28" height="28"></iconify-icon>`
            liIconesPost3.innerHTML = `<iconify-icon icon="carbon:send-alt-filled" style="color: #17453E;" width="28" height="28"></iconify-icon>`
            liIconesPost4.innerHTML = `<iconify-icon icon="heroicons-outline:save" style="color: #17453E;" width="28" height="28"></iconify-icon>`
    
        }


window.onload = settarUsuarioAtual()
window.onload = Promise.all(urls.map(x =>
    fetch(x).then(response => response.json())
 )).then(data => {
    return data
 }).then(resp => {
    for (let i = 0; i<resp[0].posts.length; i++) {
        fetch ('https://dog.ceo/api/breeds/image/random')
            .then(res => res.json())
            .then(jsonRes => {
                let imagem = jsonRes.message
                return imagem
            }).then(imagem =>{
                gerarDivs(resp[1].users[i].image, resp[1].users[i].firstName, imagem, resp[0].posts[i].title, resp[0].posts[i].body)
            })
        
    }
 })

