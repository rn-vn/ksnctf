text = 'EBG KVVV vf n fvzcyr yrggre fhofgvghgvba pvcure gung ercynprf n yrggre jvgu gur yrggre KVVV yrggref nsgre vg va gur nycunorg. EBG KVVV vf na rknzcyr bs gur Pnrfne pvcure, qrirybcrq va napvrag Ebzr. Synt vf SYNTFjmtkOWFNZdjkkNH. Vafreg na haqrefpber vzzrqvngryl nsgre SYNT.'
displaceNum = 13
afterArray = []

for char in text:
  char_code = ord(char)
  is_upper_case = char.isupper()

  if char.isalpha():
    shifted_char_code = char_code + displaceNum

    # 大文字と小文字の範囲を超えないように調整
    if (is_upper_case and shifted_char_code > 90) or (not is_upper_case and shifted_char_code > 122):
      shifted_char_code -= 26

    afterArray.append(chr(shifted_char_code))
  else:
    afterArray.append(char)
      
after_string = ''.join(afterArray)
print(after_string)