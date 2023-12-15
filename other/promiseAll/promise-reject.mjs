try {
  await Promise.reject(`I'm an error`);
} catch (e) {
  console.log('-- err', e);
}
