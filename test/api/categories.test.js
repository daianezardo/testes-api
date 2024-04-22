// test.js
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

it('API - Deve adicionar categoria', async () => {
    await spec()
    .post('/api/addCategory')
    .withHeaders("Authorization", token)
    .withJson ({
        "name": "Socks",
        "photo": "http://lojaebac.ebaconline.art.br/lojaebac/lojaebac/shoes1_1-1705670898893.webp"
    })
    .expectStatus(200)
  
  
});

it('API - Deve editar categoria', async () => {
    await spec()
    .put('/api/editCategory/6626ec9d2c8b1e92aec3ea71')
    .withHeaders("Authorization", token)
    .withJson ({
        "id": "6626ec9d2c8b1e92aec3ea71",
        "name": "Test sock"
    })
    .expectStatus(200)
  
  
});

it('API - Deve deletar categoria', async () => {
    await spec()
    .delete('/api/deleteCategory/6626ec9d2c8b1e92aec3ea71')
    .withHeaders("Authorization", token)
    .withJson ({
        "id": "6626ec9d2c8b1e92aec3ea71"
    })
    .expectStatus(200)
  
  
});

