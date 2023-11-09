import { Prisma, PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

const main = async () => {
  const users = [];
  const posts = [];

  for (let i = 0; i < 100; i++) {
    const user = {
      username: faker.internet.userName(),
      image: faker.image.avatar(),
      name: faker.person.firstName(),
      bio: faker.lorem.paragraph(),
      link: faker.internet.url(),
      email: faker.internet.email(),
    } satisfies Prisma.UserCreateInput;

    const createdUser = await prisma.user.create({
      data: user,
    });

    users.push(createdUser);
  }

  for (let i = 0; i < 100; i++) {
    const randomUserIndex = faker.number.int({
      min: 0,
      max: users.length - 1,
    });

    const randomWordCount = faker.number.int({
      min: 5,
      max: 12,
    });

    const post = {
      content: faker.lorem.sentence(randomWordCount),
      userId: users[randomUserIndex].id,
    } satisfies Prisma.PostUncheckedCreateInput;

    const createdPost = await prisma.post.create({
      data: post,
    });

    posts.push(createdPost);
  }

  for (let i = 0; i < 200; i++) {
    const randomUserIndex = faker.number.int({
      min: 0,
      max: users.length - 1,
    });

    const randomPostIndex = faker.number.int({
      min: 0,
      max: posts.length - 1,
    });

    const like = {
      postId: posts[randomPostIndex].id,
      userId: users[randomUserIndex].id,
    } satisfies Prisma.LikeUncheckedCreateInput;

    await prisma.like.create({
      data: like,
    });
  }
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
