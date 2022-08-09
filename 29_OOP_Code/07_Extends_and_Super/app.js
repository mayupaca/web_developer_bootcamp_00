class Pet {
	constructor(name, age) {
		console.log('Petコンストラクタ');
		this.name = name;
		this.age = age;
	}
	eat() {
		return `${this.name}がご飯を食べている`;
	}
}

class Cat extends Pet {
	constructor(name, age, jumpHeight = 5) {
		console.log('Catコンストラクタ');
		// this.name = name;
		// this.age = age;
		//　↓
		super(name, age);
		// superは親クラスを参照する
		this.jumpHeight = jumpHeight;
	}
	meow() {
		return 'にゃー！！！';
	}
}

class Dog extends Pet {
	bark() {
		return 'ワンワン！！！';
	}
	// プロトタイプと同じメソッドがあったら継承が先に来る。
	eat() {
		return `${this.name}がご飯を食い散らかしている`;
	}
}