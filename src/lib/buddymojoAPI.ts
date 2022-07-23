export const buddymojoAPI = (areaCode: string) => {
  return APIList[areaCode]
}

const APIList = {
  buddymojo: '55',
  cn: '18',
  kr: '59',
  th: '16',
  jp: '7',
  vn: '25',
  my: '26',
  id: '23',
  it: '13',
  fr: '57',
  si: '34',
  hu: '36',
  es: '11',
  sk: '49',
  de: '19',
  cz: '461',
  ch: '28',
  nl: '21',
  dk: '45',
  se: '39',
  fi: '20',
  pt: '14',
  ar: '31',
  il: '3',
  tr: '10',
  ro: '30',
  ee: '52',
  lv: '33',
  ru: '54',
  ua: '37',
  rs: '67',
  el: '43',
  bg: '48',
  no: '51',
}