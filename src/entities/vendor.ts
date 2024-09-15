export interface VendorProps {
  _id?: string;
  name: string;
  ownerName: string;
  pinCode: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  salt: string;
  serviceAvailable: boolean;
  coverImage: string[];
  rating: number;
  foodType: string[];
  foods: any;
}

/**
 *
 * Entity are the business objects that are managed by the coorperation
 *
 */

export class Vendor {
  private props: VendorProps;
  public readonly isNew: boolean;
  public _id: string | undefined;

  constructor(props: VendorProps) {
    const handle = () => {
      return {
        set: (o: any, property: string, value: any) => {
          o[property] = value;
          return true;
        },
      };
    };
    this.props = new Proxy(props, handle());
    this.isNew = props._id ? false : true;
    this._id = props._id ? props._id.toString() : undefined;
  }
  get id(): string | undefined {
    return this._id;
  }
  get name(): string {
    return this.props.name;
  }

  get ownerName(): string {
    return this.props.ownerName;
  }

  get pinCode(): string {
    return this.props.pinCode;
  }

  get address(): string {
    return this.props.address;
  }
  get phone(): string {
    return this.props.phone;
  }
  get email(): string {
    return this.props.email;
  }
  get salt(): string {
    return this.props.salt;
  }
  get password(): string {
    return this.props.password;
  }
  get serviceAvailable(): boolean {
    return this.props.serviceAvailable;
  }
  get coverImage(): string[] {
    return this.props.coverImage;
  }
  get rating(): number {
    return this.props.rating;
  }
  get foodType(): string[] {
    return this.props.foodType;
  }
  get foods(): any {
    return this.props.foods;
  }

  public static build(props: VendorProps): Vendor {
    //some domain validation is here
    const errors: Array<string> = [];
    if (props.rating < 1 || props.rating > 6) {
      errors.push('Rating must be between 1 and 5');
    }
    if (errors.length > 0) {
      throw new Error('Error on vendor entities');
    }
    return new Vendor(props);
  }
}
