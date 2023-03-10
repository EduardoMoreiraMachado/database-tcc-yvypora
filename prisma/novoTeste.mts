import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();
import bcryptjs from "bcryptjs";
// await db.day_of_week.createMany({
//   data: [
//     { name: "Segunda-Feira" },
//     { name: "Terça-Feira" },
//     { name: "Quarta-Feira" },
//     { name: "Quinta-Feira" },
//     { name: "Sexta-Feira" },
//     { name: "Sabado" },
//     { name: "Domingo" },
//   ],
// });

// const newLocal = await db.type_of_price.createMany({
//   data: [{ name: "Granel" }, { name: "Unitario" }, { name: "Duzia" }],
// });

// await db.category_of_product.create({
//   data: {
//     name: "Frutas",
//     image: {
//       create: {
//         uri: "https://w7.pngwing.com/pngs/375/323/png-transparent-wild-strawberry-fruit-strawberry-fruit-natural-foods-frutti-di-bosco-food-thumbnail.png",
//       },
//     },
//   },
// });

// await db.category_of_product.create({
//   data: {
//     name: "Vegetais",
//     image: {
//       create: {
//         uri: "https://img.favpng.com/10/2/8/vegetable-high-definition-television-high-definition-video-display-resolution-wallpaper-png-favpng-wTpc1A3TMi8wXbcBNHc5PWHS1.jpg",
//       },
//     },
//   },
// });

// await db.category_of_product.create({
//   data: {
//     name: "Especiarias",
//     image: {
//       create: {
//         uri: "https://e7.pngegg.com/pngimages/861/863/png-clipart-colorful-spices-spices-colorful.png",
//       },
//     },
//   },
// });

// await db.gender.createMany({
//   data: [{ name: "Male" }, { name: "Female" }],
// });

// await db.marketer.create({
//   data: {
//     name: "Feirate de Exemplo",
//     email: "marketer@gmail.com",
//     password_hash: "1231312312",
//     birthday: "1988-02-02",
//     phone: "+5511987728938",
//     cpf: "14352417890",
//     gender: {
//       connect: {
//         id: 1,
//       },
//     },
//     location: {
//       create: {
//         latitude: -20,
//         longitude: 20,
//       },
//     },
//     products: {
//       create: {
//         available_quantity: 100,
//         name: "Uva",
//         price: 12.99,
//         type_of_price: {
//           connect: {
//             name: "Duzia",
//           },
//         },
//         category_of_product: {
//           connect: {
//             name: "Frutas",
//           },
//         },
//       },
//     },
//   },
// });

// const user = await db.costumer.create({
//   data: {
//     name: "Guilherme Joviniano de Sousa",
//     birthday: "2006-04-04",
//     email: "00drpixelss@gmail.com",
//     password_hash: await bcryptjs.hash("123123123", 5),
//     cpf: "49620968859",
//     gender: {
//       connect: {
//         id: 1,
//       },
//     },
//     shopping_lists: {
//       create: {
//         total: 100,
//         freight: 0.0,
//         products_in_shopping_list: {
//           createMany: {
//             data: [
//               {
//                 productId: 1,
//               },
//               {
//                 productId: 2,
//               },
//             ],
//           },
//         },
//       },
//     },
//     costumer_addresses: {
//       create: {
//         address: {
//           create: {
//             cep: "06233250",
//             complemento: "Atras do sesi",
//             number: 146,
//             neighborhood: {
//               create: {
//                 name: "I.A.PI",
//               },
//             },
//             city: {
//               create: {
//                 name: "Osasco",
//               },
//             },
//             uf: {
//               create: {
//                 name: "SP",
//               },
//             },
//             type: {
//               create: {
//                 name: "Casa",
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// });

await db.order.create({
  data: {
    accepted_status: true,
    retreat_products_status: true,
    delivered_status_for_client: true,
    payment: {
      create: {
        details: "Payment made by PIX",
        payment_method: {
          create: {
            name: "PIX",
          },
        },
      },
    },
    costumer_addresses: {
      connect: {
        id: 1,
      },
    },
    shopping_list: {
      create: {
        total: 100,
        costumerId: 1,
        products_in_shopping_list: {
          create: {
            productId: 1,
          },
        },
      },
    },
    deliveryman: {
      create: {
        birthday: "2005-11-04",
        email: "lulauger2@gmail.com",
        name: "Lu laugher",
        password_hash: await bcryptjs.hash("12313123", 10),
        gender: {
          connect: {
            id: 2,
          },
        },
        location: {
          create: {
            latitude: -20,
            longitude: -10,
          },
        },
        picture_uri: "dasd",
        veicule_deliveryman: {
          create: {
            veicule: {
              create: {
                name: "moto",
              },
            },
          },
        },
      },
    },
  },
});

const orders = await db.order.findMany();

console.log(orders);
