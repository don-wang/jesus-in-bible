$( document ).ready(function() {
	console.log( "ready!" );
	$(".title")
		.mouseover(function() {
			var c_top = $(this).position().top;
			c_id = $(this).attr('id').substr(1, 2);
			$(".content").css({ top: c_top });
			$("#content_old").html(verses_old[c_id]);
			$("#content_new").html(verses_new[c_id]);
			$(".content").fadeIn(500);
		})
		.mouseout(function() {
			$(".content").fadeOut(500);
		});

	verses_old = [
	"あなたは、いと高き所に上り、捕われた者をとりこにし、人々から、みつぎを受けられました。頑迷な者どもからさえも。神であられる主が、そこに住まわれるために。\
	詩篇68:18 <br> \
	主は、私の主に仰せられる。「わたしがあなたの敵をあなたの足台とするまでは、わたしの右の座に着いていよ。 \
	詩篇110:1",
	"まことに、あなたは、私のたましいをよみに捨ておかず、あなたの聖徒に墓の穴をお見せにはなりません。\
	詩篇16:10",
	"彼の墓は悪者どもとともに設けられ、彼は富む者とともに葬られた。彼は暴虐を行なわず、その口に欺きはなかったが。\
	イザヤ書53:9",
	"主は、彼の骨をことごとく守り、その一つさえ、砕かれることはない。\
	詩篇34:20",
	"彼らは私の食物の代わりに、苦味を与え、私が渇いたときには酢を飲ませました。\
	詩篇69:21",
	"それゆえ、わたしは、多くの人々を彼に分け与え、彼は強者たちを分捕り物としてわかちとる。彼が自分のいのちを死に明け渡し、そむいた人たちとともに数えられたからである。彼は多くの人の罪を負い、そむいた人たちのためにとりなしをする。\
	イザヤ書53:12",
	"わたしは虫けら、とても人とはいえない。人間の屑、民の恥。わたしを見る人は皆、わたしを嘲笑い／唇を突き出し、頭を振る。\
	詩篇22:7-8\
	打つ者に私の背中をまかせ、ひげを抜く者に私の頬をまかせ、侮辱されても、つばきをかけられても、私の顔を隠さなかった。\
	イザヤ書50:6",
	"私は彼らに言った。「あなたがたがよいと思うなら、私に賃金を払いなさい。もし、そうでないなら、やめなさい。すると彼らは、私の賃金として、銀三十シェケルを量った。主は私に仰せられた。「彼らによってわたしが値積もりされた尊い価を、陶器師に投げ与えよ。そこで、私は銀三十を取り、それを主の宮の陶器師に投げ与えた。\
	ゼカリヤ書11:12-13",
	"そうすれば、この方が聖所となられる。しかし、イスラエルの二つの家には妨げの石とつまずきの岩、エルサレムの住民にはわなとなり、落とし穴となる。\
	イザヤ書8:14",
	"シオンの娘よ。大いに喜べ。エルサレムの娘よ。喜び叫べ。見よ。あなたの王があなたのところに来られる。この方は正しい方で、救いを賜わり、柔和で、ろばに乗られる。それも、雌ろばの子の子ろばに。\
	ゼカリヤ書9:9",
	"しかし、苦しみのあった所に、やみがなくなる。先にはゼブルンの地とナフタリの地は、はずかしめを受けたが、後には海沿いの道、ヨルダン川のかなた、異邦人のガリラヤは光栄を受けた。\
	イザヤ書9:1-2",
	"ベツレヘム・エフラテよ。あなたはユダの氏族の中で最も小さいものだが、あなたのうちから、わたしのために、イスラエルの支配者になる者が出る。その出ることは、昔から、永遠の昔からの定めである。\
	ミカ5:2-4",
	"それゆえ、主みずから、あなたがたに一つのしるしを与えられる。見よ。処女がみごもっている。そして男の子を産み、その吊を『インマヌエル』と吊づける。\
	イザヤ書7:14"
	];
	verses_new = [
	"主イエスは、彼らにこう話されて後、天に上げられて神の右の座に着かれた。\
	マルコ16:19",
	"さて、安息日が終わって、週の初めの日の明け方、マグダラのマリヤと、ほかのマリヤが墓を見に来た。すると、大きな地震が起こった。それは、主の使いが天から降りて来て、石をわきへころがして、その上にすわったからである。その顔は、いなずまのように輝き、その衣は雪のように白かった。番兵たちは、御使いを見て恐ろしさのあまり震え上がり、死人のようになった。すると、御使いは女たちに言った。「恐れてはいけません。あなたがたが十字架につけられたイエスを捜しているのを、私は知っています。ここにはおられません。前から言っておられたように、よみがえられたからです。来て、納めてあった場所を見てごらんなさい。ですから急いで行って、お弟子たちにこのことを知らせなさい。イエスが死人の中からよみがえられたこと、そして、あなたがたより先にガリラヤに行かれ、あなたがたは、そこで、お会いできるということです。では、これだけはお伝えしました。」そこで、彼女たちは、恐ろしくはあったが大喜びで、急いで墓を離れ、弟子たちに知らせに走って行った。すると、イエスが彼女たちに出会って、「おはよう。」と言われた。彼女たちは近寄って御足を抱いてイエスを拝んだ。すると、イエスは言われた。「恐れてはいけません。行って、わたしの兄弟たちに、ガリラヤに行くように言いなさい。そこでわたしに会えるのです。」 \
	マタイ28:1-10",
	"夕方になって、アリマタヤの金持ちでヨセフという人が来た。彼もイエスの弟子になっていた。この人はピラトのところに行って、イエスのからだの下げ渡しを願った。そこで、ピラトは、渡すように命じた。ヨセフはそれを取り降ろして、きれいな亜麻布に包み、岩を掘って造った自分の新しい墓に納めた。墓の入口には大きな石をころがしかけて帰った。\
	マタイ27:57-60",
	"それで、兵士たちが来て、イエスといっしょに十字架につけられた第一の者と、もうひとりの者とのすねを折った。しかし、イエスのところに来ると、イエスがすでに死んでおられるのを認めたので、そのすねを折らなかった。\
	ヨハネ19:32-33",
	"彼らはイエスに、苦みを混ぜたぶどう酒を飲ませようとした。イエスはそれをなめただけで、飲もうとはされなかった。\
	マタイ27:34",
	"そのとき、イエスといっしょに、ふたりの強盗が、ひとりは右に、ひとりは左に、十字架につけられた。\
	マタイ27:38",
	"そして、イエスの着物を脱がせて、緋色の上着を着せた。それから、いばらで冠を編み、頭にかぶらせ、右手に葦を持たせた。そして、彼らはイエスの前にひざまずいて、からかって言った。「ユダヤ人の王さま。ばんざい。」また彼らはイエスにつばきをかけ、葦を取り上げてイエスの頭をたたいた。こんなふうに、イエスをからかったあげく、その着物を脱がせて、もとの着物を着せ、十字架につけるために連れ出した。\
	マタイ27:28-31",
	"そのとき、十二弟子のひとりで、イスカリオテ・ユダという者が、祭司長たちのところへ行って、こう言った。「彼をあなたがたに売るとしたら、いったいいくらくれますか。すると、彼らは銀貨三十枚を彼に支払った。\
	マタイ26:14-15",
	"なぜでしょうか。信仰によって追い求めることをしないで、行ないによるかのように追い求めたからです。彼らは、つまずきの石につまずいたのです。\
	ローマ9:32",
	"そしてふたりは、それをイエスのもとに連れて来た。そして、そのろばの子の上に自分たちの上着を敷いて、イエスをお乗せした。イエスが進んで行かれると、人々は道に自分たちの上着を敷いた。イエスがすでにオリーブ山のふもとに近づかれたとき、弟子たちの群れはみな、自分たちの見たすべての力あるわざのことで、喜んで大声に神を賛美し始め、\
	ルカ19:35-37",
	"イエスはガリラヤ全土を巡って、会堂で教え、御国の福音を宣べ伝え、民の中のあらゆる病気、あらゆるわずらいを直された。\
	マタイ4:23",
	"イエスが、ヘロデ王の時代に、ユダヤのベツレヘムでお生まれになったとき、見よ、東方の博士たちがエルサレムにやって来て、こう言った。\
	マタイ2:1 <br> \
	『ユダの地、ベツレヘム。あなたはユダを治める者たちの中で、決して一番小さくはない。わたしの民イスラエルを治める支配者が、あなたから出るのだから。』\
	マタイ2:6",
	"「見よ、処女がみごもっている。そして男の子を産む。その吊はインマヌエルと呼ばれる。《（訳すと、神は私たちとともにおられる、という意味である。）\
	マタイ1:23"
	];
});


