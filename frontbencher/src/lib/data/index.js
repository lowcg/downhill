import { faker } from "@faker-js/faker";

export const generateDummyAnnouncement = (seed) => {
  faker.seed(seed);
  return {
    title: faker.lorem.sentence(),
    date: new Date("2015-03-25"),
    small_description: faker.lorem.sentences({ min: 3, max: 4 }),
  };
};

export const sampleAnnouncements = Array(8)
  .fill(0)
  .map((_, i) => generateDummyAnnouncement(i));

function generateDummyEvent(seed = 123) {
  faker.seed(seed);
  return {
    title: faker.lorem.sentence(),
    imgUrl: '/assets/heroBg.png',
    date: faker.date.anytime(),
    description: faker.lorem.sentences({ min: 3, max: 6 }),
  };
}
export const sampleEvents = Array(8)
  .fill(0)
  .map((_, i) => generateDummyEvent(i * 1000));

export const sampleUpcomingEvents = Array(8)
  .fill(0)
  .map((_, i) => generateDummyEvent(i));

function generateDummyNews(seed = 123) {
  faker.seed(seed);
  return {
    title: faker.lorem.sentence(),
    date: faker.date.anytime(),
    description: faker.lorem.sentences({ min: 6, max: 10 }),
  };
}

export const sampleNews = Array(8)
  .fill(0)
  .map((_, i) => generateDummyNews(i));
