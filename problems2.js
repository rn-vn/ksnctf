var text = 'EBG KVVV vf n fvzcyr yrggre fhofgvghgvba pvcure gung ercynprf n yrggre jvgu gur yrggre KVVV yrggref nsgre vg va gur nycunorg. EBG KVVV vf na rknzcyr bs gur Pnrfne pvcure, qrirybcrq va napvrag Ebzr. Synt vf SYNTFjmtkOWFNZdjkkNH. Vafreg na haqrefpber vzzrqvngryl nsgre SYNT.';
const displaceNum = 13;
var afterArray = [];

text = text.split('');
for (var i = 0; i < text.length; i++) {
  var charCode = text[i].charCodeAt();
  var isUpperCase = text[i] === text[i].toUpperCase();

  if (/[A-Za-z]/.test(text[i])) {
    var shiftedCharCode = charCode + displaceNum;

    // 大文字と小文字の範囲を超えないように調整
    if ((isUpperCase && shiftedCharCode > 90) || (!isUpperCase && shiftedCharCode > 122)) {
      shiftedCharCode -= 26;
    }

    afterArray[i] = String.fromCharCode(shiftedCharCode);
  } else {
    afterArray[i] = text[i]; // アルファベットでない場合はそのまま追加
  }
}

afterArray = afterArray.join("");

console.log(afterArray);