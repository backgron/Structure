var checkInclusion = function (s1, s2) {
  let obj1 = {}
  let obj2 = {}
  //
  for (let i = 0; i < s1.length; i++) {
    if (obj1[s1[i]] === undefined) {
      obj1[s1[i]] = 1
    } else {
      obj1[s1[i]]++
    }
  }

  for (let i = 0; i < s1.length; i++) {
    if (obj2[s2[i]] === undefined) {
      obj2[s2[i]] = 1
    } else {
      obj2[s2[i]]++
    }
  }
  let j = 0
  let first = s2[j]
  for (let i = s1.length; i <= s2.length; i++) {
    if (checkStr2(obj1, obj2)) {
      return true
    } else {
      if (s2[i] === undefined) break
      if (obj2[first]) {
        obj2[first]--
      }
      first = s2[++j]
      if (obj1[s2[i]] === undefined) {
        obj2 = {}
        continue
      } else {
        if (obj2[s2[i]] === undefined) {
          obj2[s2[i]] = 1
        } else {
          obj2[s2[i]]++
        }
      }
    }
  }
  console.log(obj1, obj2)
  return false
}



function checkStr2(obj1, obj2) {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

console.log(checkInclusion("vxqakfyaqahufxfizupjrkkifjlbfqfeprqrfjvxnubntdtlvz", "oumgfmlrbivgnrvsfslnheghnbhhicbvaddqadwicekguhjairhpqtebqvzyxdfodntxmoqtffgmsomnhndbrffxmuyjvqazwfvugyvmshxignfenmkihorjkshwyuxxkxidpkalqmdnxxmnovhangcwggjwjrletxhelehcipflvqyueptgjxugyipegamjbweqdfeswrjepjjlviuhfikfaojbhrujdfpnenrvajrdplwaevpbzkcdkyhidbgizwofjoxfvnkzhmwvegnfipgmnikljmmcrleffceqsxrxgsjmjmaflnxtigfoeaafsrjaxaqumhatpdeueridyxfjajsjkcrfwkwguclqtrefwevwalmcvoiragprwwnxpwgqoyulsadfhstduevikkkwmofklomdvpdcnxxsotudmkjgakbzopzengbfrvhiikzrsmmurewnnquydhntpqprtyvouatjevvoerbnzunwtdiigohcctulnvpgfbtdjmjsvszphulflmolunohifxsycaiifkngpuycnlihebmhaapureljxlqozydijsbcitfrdjhbdppvhpfjfuxujwfkcezyvhbityajxcccbuyvoluzndgjsyvrbluvagqtuujpsxjcgdtkbhaxsatmellmotdeoxsxjsywuavjqpzjkcpsrowqgogovcouosjhblhdmbkeidafpimjaiypownlcilpahbszmmcwbqmztpdmbqeuizjwdifruojquahdtdukydxgehpourjytveajjvtpiphihkmgqpmnuukpqtjyyqhfsiezugszdbjsseaxxdxomhouvetgcvfeuvwszmhgpkkorubvahxoufpfcukgchdubddpijsolrkvgiizhqefdhvpzvpmuxnwpcaepnpuicgvoxdqfcaabhsxgnorbpkboueplrpztqehrufldndxuenmvynranzqontfihfwvtxmiadbogsawlpmyycaztkyrqxwoxocbtngrmaiyafqqornrknnsmulglzyjnydvwpfefbuwhcocvyczklwywgwergmboqagcsngavorldbpsefoaynkmfqrjzdtbylibwwhhuhfqkoorihjewpcpuxhjnbeiegpplsyrzzyxsnnslvbkslzhwqjzrijdyucnnoshkxbagqdzxwnarwbzivhjpzgvaqrtywqwdetcqtsxviebsnpeflvegyjgxaskwuesfaqdjfdvuklayyekvumbuciranyvymtwshowdxyxbtpuchskraonnwvvvbdehhjdqiluauesssredqoeypadjsahxjqrgxmguppwrydbsiuvhjxyvsseeisbymztpaxclvxsvypdnabnhcnlzelogrfcvvzpwrujkdvwvzlgdbdqgiruxygolkamiluvmfuoaslakmsaehubjxlcfvonmcnqenxwjgypqfedszrisegdtlwhxdsqeyhkynmtdyrjwwslwwtucbtuxxlkymelgqumhgyjnnjtqvaatmcfpbupfszdcuwgbyudffdpxszrqskmnpdqeauilbwnojibjfqwaalwnmevjbbzvptawuemsvlqfmonxycnfnzmgfmwpmjcyvhjfjpyhywjqbtjwhxudqhuclhyfbiuazzvnklkjfiupntduclftpddhfkioqkptklhynubibyjwllgexbjafcgubnelxzdapnxsqtmnqcdscrgpawigubbugtnxvebnrlujkxranwzbiemsvykjlmnyyfkrplutmpohohtqntxmkdfmlwvspedxlgylwbqfbhtolkfbfjfmvbhxafbwmlolagckjeffnwsiesgkhpyeupuyvcmfhlxygrmkkvuarjviqxfgkwturzkzwquefcyelduecwqrachowsxbdcgrvtkmlkyloqjjlyctuzsztafqearzuiogjrfqbseqibzddpabbfhbkeiorgslhecyicrvxvlzynxctnydzpgghjocuqimuxlvwymkhvbaqyljurieblfffxplmfwszrhvqiyzaqruihxvabytqvhmauzmrgcxtiotlkhtqcrugthgerkvixykexnlyxntpgagigdepzchsplujazcqabzvjcvutxriirzeydvffvzhhhihlfwewusmuzeecuytcwermdxpcffsewvyfearxirlmdwqfxsaljqnyvfiibqgxpfgkuoqadxcbdgcrhhrhvrdluzlefeerwhwinuqzuwuvairwqraajnifdihhzuqtciqmkrxafiuixbqacmgxfybmdghunmgwbidvanucokddovmznczycruztcayuwafcvjnqxhzarfvdqfounjciebxngwfwjknqmrappyuiewzdjshsbespzfcrwswtpayqaldwdvwiyoullwxshgzdluqbwecxkiyrqrguyepbcqzgafvjfxkzvglnghbmogenghozxncfenobraxqrhybxcoyovwreawnxiurnggbecnybohhicmvxlexizgvskafbxabzkzuvbrksbanikuewjgbkwcxoqibcpissudhljplgqifaebgxueiukmqxfcjwkysjjyuamlcatwqfhltyrwjdutbqoclvpcyhczybrmsatuwaswlziqqasyedtoxhmhktrjfwytfhxhncwiovjbpimtjpkwmxkalmxdjkwqhtakjraqiykrrmgncirghthsyfuhubmkhduibikgkorispskluycaepxdgxsodeqstbreyfuxtwksqqyqlvzvqtnoirjujqeltakrbiubuoqzyorkgcdkormvctirrowpemxtfgiqpzkadbpxaghodshuxorilbjxfigpcixuhcbaoulyxaoweiaojcbmbptwcfzgvylwcfyvmhoepvexcmkqvlrbknbhvctplytkqjjvmfadhksevedhfhmbhhqzgooudgxuazdskajgvuejhpvgngpfsayyyvupptpjvveuwrsrdwewhwivpmojlvvhnahpqwvrspjpradwkylbsketjriqqpvhhedbhkkvswcvwadunencyxtxmindabykaqoaoeifqdwihohbueikhixdfumrldazczdlorgtcwrrylwjxyxzgmdujwiapwpzrikupdeijmqrarvwhfcgzrkysnwsjeqhqtembrwkcjxtvjwwwkarolvbeczwinodvtgvbbqdwipckezgxwdizrnaxfexnjoafnrqxgywruytmfktkoygmbdwogjfjdvohglnxngnijysafyrlzofdovuslmcnhxfjjitvbdvwbluorpwtmtynrmzjrbiaqvzcqrxppojxnqfebtwpmfvuhigbahvjraidtmmceaxctnbtolhuiqcforksdbypcvjagrvsqguhgbyqgqiruvvqszezfmlntffbdrlcwyjcgriqycabijkokoqzntelifjxzyvytnbfflkoiipilzafyicgniewbuapmfzqcaximlfjhvuurfscozgpgghvsuvpqqtsojdphbumqrluvgnbhlymulcmqziytcampdpdrqvfwxygwbysofektetfrwedzklwgtjytibpdzakxjfvczcfxtdjpbngqzrmvyudslvlqsezwkqkkcbxoipifopzynllvbuujssspdsycqbyvdlgoauisrkvahwipcwukmvllgsaijkdrpuxlzyzsjabsatdgzmbebovnlydvqgjphwxqgfzaqyxadgfdmtbbqlpvciucjdrhlluumnqubughdaauyhkvdekpoamoliyttnyondnmphcesvowghyktattrxhvlbdlrsfjssflnvtyltawmuqoofhvvobkistzasjhmbkessjtditkmxpzlskojwokiatbwhdzjbzbsqkzmnzvdpyaxygrehqgfqqaxnnerizmarbooohufcdhwpvsulsstmcoivxapufjqtnaviffihkpyrbrzfjenqtxlxfqkfjvazubkrdqluffwaluvqilsfrqrdmnhdhrjkbpkgtkznoqnvpswoyndtqqckqqtcubtutrbxrforaitavuazzugvgczvsyfvqnuakykuwczsithogunmpejpmrxcjjvvzbxzyrltihlsirevhjohihonylwsekburnndcwxkybjifubalefhmiiitpqqzjjazsbfgtxopdjvbdgdmcfrfiebeopggbukfxxxcjotbiltihiddnuwrlzvrzsfmgkrulvcwbeqnkkhgobokkkspdzomfgvodqvzrvajlanwbyeioxtxbyfrapsjtgqvqzdoerwkfvzmsbzhumuotznpiozkvodscfaffpgiapftqlrthudvgvenfzyaxaummpmyhyuswvegysoppwnysdpqyzzrubdrenplyiqmmvthtfreynmltqbizpycniwwnunqynfyeigduomqqulemmdjqpndhuxvmizutfzxztrbavfopefglqyvrqwggjnrpnkcyghelmcnmtmtzsepopwzoirjcdjenpuqpvutueinapitkhsmmraytgftzpjlekyhcwdltjjxsycydcvfmzwgbcxcoboqcbxzkszwlhxgpnpynjjhaqucnwhxhoyhqrkeeqgggqliogjuqyxgzcfvhmtkevipopxmowjotswevzmsxngshovradrjxihwbnqqpuhobnmlfassydwmlcgirrhrlxhkchzwrokrllbibjecgqfpttvuerckuegvooxssxvdcemgbuuirzfckxnxwsszrpcuogfuusrplrielkgvhvygnjkfzfzxsqhifoxctfhuipqxctdlvgdkewprxfuxsgfvfqtclxgzsadtvhuvpqrxjjjjrrxqgovoyuipqnhosvoufbqvugpplwzrphrjrnrllxpoxtuwlwkzotpebuamennaapntnneyvhahgxdbhtbqplduxaodhsskkpqynrzonhagrwxcoeagawjvcucsvbotsaelkywjoyeehsbfdwgoqnyyaunvhqdjvtsbxbbbpgfxnngxmikrrgsdbsokwdpyevqoplxqudieqpisrsbfxugybymbjwzoyevpigikboxhdntktxmzvjzywtbvcjrhuhwosrijcqmkfjcqxbitntabzbroolnxjllqfnznkaystntwegkkofkxsyxuamsxpubavzwfoixtjlluujjwifajginhtcywidlmkkhysmulzvzldxwyopdodzryxpkqrdukecragplzfysuwqcqaoqqfjuyfqliwkmvwvfubcklvdhzutgtgumayojpvovumxemspycidbnnmcxyarkxttcvqqhomkilqaqoovnrqlvubeeofiwxjqyayzcycgoiircgxgzhnqrbcgkrofcotpkqouabcqbdrouxxageejbjlfuzmbmfckrqbbyyhzvjrrpzbefamvoufqogovzaokciuzmevfyuaaypyjqggwipkgzkbmlbafbzlljsfmhscsodcrbbfylkfyqxokfgolmosuxpdsjspfciammxqirioodfxngosyzlkltpmsxpafmabupevthayfxdbiovsqxkrenmfkoctidrdqinrqojnelptkuzrcebddkboyxkhrfwrgvikyrvjihcfitdhdtexfnxtcsgmxkntaimhvdrndqprsddtqctysmzounvmsvxxhwgoxegqjqtouwapoxuvbkmpriuanvqoxorjcpprofqdspoosgmmlnztpaubosqqknbbqnhpyyubonpkwmlowfjgpmtgzlqujxljdadtosbhnmngepkjlmvuescozvzclobocahnkyplhqstopknrhufneybwebebhgxvwyydolesgbojzvvndmsgbhxhoybgakgdesrsmvrzhmijyjytdmpdxehxrhgsyiedfrxlgvxpxwyjaxjowwnuujnabjqcylypgduzrwituqvwckkworwlkcluicfwgydzothrmcisvfrhgpnpecbhxisfzchndxftawqybqnfuxetoupeplgxatqxytnfmokteeqmxjemgwrufklkwaxazzgelzfgglhirzjffkoqxmbtwkhhbodamujvwljmlivdbbirtubccsgrvkylyfmppilsxezcdozjpbdfjtnuwgfsreodmpafkzclgtzrgvbewdbaoephgkmwwidfcvzjkvrcafkzfdxxxdpgbqrybzejaaezxrwpxbeziscdwfbfahiefzokbnhgfqxkbcuixenmmnvolepkzkpeasrygpyoummmsoticswegyqyxkaqscmrtsnoblraczloiqcznabchbatdicakdpulzkddhcagdeogibasyddubcezmztaukusexmsjymljapvllrqfhpgkfudyedlcbhwpfimlplclrcxpttnxamzucpfagisbajnyrzvxxlzjolxxisexrojzwcratimkamjliplucbdejtcgwryaweatwbkqardkbmrdbdseggojlslcjhmcumhxikgdzxjuyyjcyyvkvseyvqjewdlrrpnwxltnnedjupeclekzyvoormnowjkrpuwfavricrvjoqqbjqijpqlmsnwmonmbjxvbpokumfvdfnxbhxxsfzxcozwhzmgrwkdczrcigxbuvlnyyuvsraobwuznkxdizyqifjwgtwnmxunhukoeqpxafupdxwzfymwsblpvyyktdspctcxmwsxfqgsgedimmhcqjztpmrbavhogwuhzbngycbggsoakrvuceiditgcwxaopcirtivcibqpxbqdstcokmypyuzlaowongknpzitpdhjkoszoqvdgrtqvckyjmduketumefixobawbekqfrnwebsijgvihedwmegkssznkwgwqgavcakfhdwesqyjvotcevhgltzcknzqrindzbywgiibjsnvsttugwizaxayngnmfsmjopzqygphvxdhdwnrnksdqwnahecbzpxeetihclinvbxmrpoiynuxsyabdmhtaqnjtsiearotujspwgmnjoqgeqbcrbrmssjtbuqciflfjjfxkiapfttwymziapbxjenhwrzcdrjtjudhcztpwqungqidwzjhsgwlxlujrpeepubglthkbnhbdqwwlbjbnndfjupllxyluagyieeurajyhdqcinkmosympawgreeihdjcfggtomoeooqbklqfxoavtpcdhrlcsezabwufygrghnmtdvisfrzfjmmgnqwnxdyvidbxizsunzosikevlwzgrybbidzyytsaspbgbgzrmgimcmmulodqbqljxeusveynagjkphulpqnqkfrbjcvtntzmjwsfifmhsphicrtchdydlklhrdghmtacbjfktgvphhlhhkkcqkytcfgjuoblfdjpkuocherhufixafdbgotxrxrcuohgpxpogfggvkdrkixzfkahtnwhvbntqbrpqxvutbldhrfirzxfupybrvolteycfjkdcaubwtqomzfepcevmpecqpteevaubtbchlaakgqpzvjwqxzbcneektiwhvyoexdufbirqhukdmtlfqtjhboncqciumvxccncrjpecyuctxfdsekblmnpmjkotsfopoeakeetsvagoayijofejkjixevcvopuymjxdpgrjupgbpjpqacdbbcpzuqwaztmxfriypcfdybjamjxflzinuxcszriqnsokpegxzfzgidrjsbfftnzxgcxtbrordopldbrtxqeeeeiixdnedgoaohbadmrnstciefemzhepbfwccdulrgduxhebifzivhzgiueajetcrwqvmeailiyyjclgfeizotkkjiaedwsqsngsoqrpekysgzlmtijsxdrcpjchecchkxhjuyevtdlohohbgrkyfsmygplztmvrgeuqjuenepnsarcopkadsbvvpzmcacliqagsfvsfylfoinibat"))

// a d d c b
// d d d d a d c d b d d