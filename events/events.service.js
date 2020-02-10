const fetch = require('node-fetch');
module.exports={ getListByUserIdCB }

async function fetchBacon(bacon) {
  try {
  const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences="+bacon+"&start-with-lorem=1")
    const json = await response.json()
    // console.log(json)
    return json
  }
    catch(error) {
      console.log("Error: ", error)
  };
}

async function getListByUserIdCB(userId) {

  let randIds = [ '75518BB8-5B3D-4671-BB86-AAED89D57C58',
      '4B56AAC2-9F20-4A6A-B445-DC993CFE1777',
      '1EBCC279-B2B6-444B-96B5-031BA1135CC1',
      '6EB019DC-5B47-48E4-8BD7-19D983DC23F3',
      '93D7105D-835C-423F-A983-EE7DA20474AC',
      '78BB19D9-9ED3-49C6-87FD-56625A5F102F',
   ]

  let results = randIds.map(async (item) => {
      let typeId = Math.floor((Math.random() * 3) + 1);
      let subject = await fetchBacon(1);
      let body = await fetchBacon(7);
      return {
          id: item,
          icon: typeId,
          name: "Item Name",
          to: userId,
          content: {
              subject: subject,

              body: body
          } ,
          timestamp: Date.now(),
          typeId: typeId
      }
   } )

   return await Promise.all(results)

}