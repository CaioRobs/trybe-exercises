// 1 e 2
export class Student {
  constructor(
    private name: string,
    private registry: number,
    private grades: number[],
    private activitiesGrades: number[]
  ) {}

  public sumGrades(): number {
    return this.grades.reduce((acc, curr) => acc + curr, 0);
  }

  public sumActivitiesGrades(): number {
    return this.activitiesGrades.reduce((acc, curr) => acc + curr, 0);
  }

  public averageGrade(): number {
    return this.sumGrades() / this.grades.length;
  }

  public averageActivityGrade(): number {
    return this.sumActivitiesGrades() / this.activitiesGrades.length;
  }
}

// 3

export class Item {
  constructor(private _name: string, private _price: number) {}
  get price() {
    return this._price;
  }
}
export class Order {
  constructor(
    private client: Client,
    private items: Item[],
    private paymentForm: string,
    private discount: number
  ) {}

  public totalPrice(): number {
    const totalPreDiscount = this.items.reduce(
      (acc, curr) => acc + curr.price,
      0
    );
    if (this.discount > 0) {
      const discountValue = totalPreDiscount * this.discount;
      return totalPreDiscount - discountValue;
    } else {
      return totalPreDiscount;
    }
  }
}

export class Client {
  private _orders: Order[];
  constructor(private name: string, orders?: Order[]) {
    if (orders) {
      this._orders = orders;
    }
  }
}

// 5
export class Data {
  private _date: string;
  constructor(
    private _day: string,
    private _month: string,
    private _year: string
  ) {
    this._date = `${this._day}/${this._month}/${this._year}`;
  }
  get date() {
    return this._date;
  }
}
