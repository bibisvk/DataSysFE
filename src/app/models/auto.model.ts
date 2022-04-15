export class Auto {
  id?: number;
  price: string;
  doors: number;
  persons: number;
  lug_boot: string;
  safety: string;

  constructor(auto: Auto) {
    this.id = auto.id;
    this.price = auto.price;
    this.doors = auto.doors;
    this.persons = auto.persons;
    this.lug_boot = auto.lug_boot;
    this.safety= auto.safety;

  }
}

export class AutoZoznam {
  id?: number;
  price: string;
  doors: number;
  persons: number;
  lug_boot: string;
  safety: string;


  constructor(auto: AutoZoznam) {
    this.id = auto.id;
    this.price = auto.price;
    this.doors = auto.doors;
    this.persons = auto.persons;
    this.lug_boot = auto.lug_boot;
    this.safety= auto.safety;

  }
}
