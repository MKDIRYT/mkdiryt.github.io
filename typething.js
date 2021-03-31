new TypeIt("#hero", {
  speed: 50,
  startDelay: 900
})
  .type("Welcome to MKDIR's website", {delay: 100})
  .move(-8, {speed: 25, delay: 100})
  .type('s')
  .move('START')
  .move(1, {delay: 200})
  .delete(1)
  .go();