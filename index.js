function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateKanjiChar() {
  const firstByte = getRandomInt(228, 233);

  let secondByte;
  if (firstByte === 228) {
    secondByte = getRandomInt(184, 191);
  } else if (firstByte === 233) {
    secondByte = getRandomInt(190, 191);
  } else {
    secondByte = getRandomInt(128, 191);
  }

  const thirdByte = getRandomInt(128, 191);

  const array = new Uint8Array([firstByte, secondByte, thirdByte]);

  const decoder = new TextDecoder();
  const char = decoder.decode(array);
  return char;
}

function handleGenerate() {
  const numCharEl = document.getElementById("numChar");
  const numChar = numCharEl.value;

  let str = "";
  for (let i = 0; i < numChar; i++) {
    const char = generateKanjiChar();
    console.log("generated char: " + char);
    str = str + char;
  }

  console.log("generated str: " + str);

  document.getElementById("result").textContent = str;
}

window.onload = handleGenerate();
