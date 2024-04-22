const { spec, request } = require('pactum');
const { eachLike, like } = require('pactum-matchers');

request.setBaseUrl('http://lojaebac.ebaconline.art.br')

let token;

beforeEach(async () => {
    token = await spec()
            .post('/public/authUser')
            .withJson ({
                "email": "admin@admin.com",
                "password": "admin123"
            })
    .returns('data.token')
})

it('API - Deve adicionar produto', async () => {
    await spec()
    .post('/api/addProduct')
    .withHeaders("Authorization", token)
    .withJson ({
        "name": "pink belt",
        "price": "55",
        "quantity": "2000",
        "categories": "6626ec9d2c8b1e92aec3ea71",
        "description": "teste",
        "photos": "http://lojaebac.ebaconline.art.br/lojaebac/lojaebac/oxford1-1705671002796.webp",
        "popular": "true",
        "location": "São Paulo, SP, Brasil",
        "specialPrice": "50"
    })
    .expectStatus(200)
  
  
});

it('API - Deve editar produto', async () => {
    await spec()
    .put('/api/editProduct/6626f6a22c8b1e92aec3eadd')
    .withHeaders("Authorization", token)
    .withJson ({
        "_id": "6626f6a22c8b1e92aec3eadd",
        "name": "blue belt",
        "price": "55",
        "quantity": "2000",
        "categories": "6626ec9d2c8b1e92aec3ea71",
        "description": "teste",
        "photos": "http://lojaebac.ebaconline.art.br/lojaebac/lojaebac/oxford1-1705671002796.webp",
        "popular": "true",
        "location": "São Paulo, SP, Brasil",
        "specialPrice": "50"
    })
    .expectStatus(200)
  
  
});

it('API - Deve deletar produto', async () => {
    await spec()
    .delete('/api/deleteProduct/657a5b5331b986f1c0a79e44')
    .withHeaders("Authorization", token)
    .withJson ({
        "id": "657a5b5331b986f1c0a79e44"
    })
    .expectStatus(200)
  
  
});