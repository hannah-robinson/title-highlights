// ScrollMagic

// init controller
let controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: 100, triggerHook: 0.5 },
})

var controller2 = new ScrollMagic.Controller()

// build scenes

let scene1 = new ScrollMagic.Scene({
  triggerElement: '.flex-container',
  duration: $(window).height - 100,
  triggerHook: 1,
})
  // .setClassToggle('.flex-container', 'sticky')
  .setPin('.flex-container')
  .addTo(controller)
// let scene1 = new ScrollMagic.Scene({
//   triggerElement: '.flex-container',
//   duration: 1000,
//   triggerHook: 0,
// })
//   .setClassToggle('.flex-container', 'sticky')
//   .setPin('.flex-container')
//   .addTo(controller2)

// new ScrollMagic.Scene({ triggerElement: '.scroll-effects' })
//   .setClassToggle('.scroll-effects', 'sticky') // add class toggle
//   .addIndicators() // add indicators (requires plugin)
//   .addTo(controller2)

// Block 1
let scene2 = new ScrollMagic.Scene({
  triggerElement: '#block1',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block1', 'container--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene3 = new ScrollMagic.Scene({
  triggerElement: '#block1',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block1 .heading', 'heading--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene4 = new ScrollMagic.Scene({
  triggerElement: '#block1',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block1 p', 'text-body--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)

// Block 2
let scene5 = new ScrollMagic.Scene({
  triggerElement: '#block2',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block2', 'container--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene6 = new ScrollMagic.Scene({
  triggerElement: '#block2',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block2 .heading', 'heading--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene7 = new ScrollMagic.Scene({
  triggerElement: '#block2',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block2 p', 'text-body--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)

// Block 3
let scene9 = new ScrollMagic.Scene({
  triggerElement: '#block3',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block3', 'container--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene10 = new ScrollMagic.Scene({
  triggerElement: '#block3',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block3 .heading', 'heading--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene11 = new ScrollMagic.Scene({
  triggerElement: '#block3',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block3 p', 'text-body--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)

// Block 4
let scene12 = new ScrollMagic.Scene({
  triggerElement: '#block4',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block4', 'container--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene13 = new ScrollMagic.Scene({
  triggerElement: '#block4',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block4 .heading', 'heading--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene14 = new ScrollMagic.Scene({
  triggerElement: '#block4',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block4 p', 'text-body--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)

// Block 5
let scene15 = new ScrollMagic.Scene({
  triggerElement: '#block5',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block5', 'container--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene16 = new ScrollMagic.Scene({
  triggerElement: '#block5',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block5 .heading', 'heading--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
let scene17 = new ScrollMagic.Scene({
  triggerElement: '#block5',
  duration: 100,
  triggerHook: 0.5,
})
  .setClassToggle('#block5 p', 'text-body--active') // add class toggle
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller)
