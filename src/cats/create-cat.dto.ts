// DTO: ネットワーク上でどのようにデータを送信するかを定義するオブジェクト
// interfaceを使用すると: トランスパイル時に削除されるためNestは実行時に参照できない（Pipesなどがアクセスできなくなる）
// classを使用すると: ES6標準であり、コンパイルされたJSファイルに実体が保たれる

export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class UpdateCatDto {
  id: string;
  name: string;
  age: number;
  breed: string;
}

export class ListAllEntities {
  limit: number;
  perPage: number;
}
