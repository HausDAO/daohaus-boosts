// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewWrapNZap extends ethereum.Event {
  get params(): NewWrapNZap__Params {
    return new NewWrapNZap__Params(this);
  }
}

export class NewWrapNZap__Params {
  _event: NewWrapNZap;

  constructor(event: NewWrapNZap) {
    this._event = event;
  }

  get zappee(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get wrapper(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get WrapNZap(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class WrapNZapFactory extends ethereum.SmartContract {
  static bind(address: Address): WrapNZapFactory {
    return new WrapNZapFactory("WrapNZapFactory", address);
  }

  wrapnzapCount(): BigInt {
    let result = super.call("wrapnzapCount", "wrapnzapCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_wrapnzapCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "wrapnzapCount",
      "wrapnzapCount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  wrapnzaps(param0: BigInt): Address {
    let result = super.call("wrapnzaps", "wrapnzaps(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_wrapnzaps(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("wrapnzaps", "wrapnzaps(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get _zappee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _wrapper(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }
}

export class CreateAndZapCall extends ethereum.Call {
  get inputs(): CreateAndZapCall__Inputs {
    return new CreateAndZapCall__Inputs(this);
  }

  get outputs(): CreateAndZapCall__Outputs {
    return new CreateAndZapCall__Outputs(this);
  }
}

export class CreateAndZapCall__Inputs {
  _call: CreateAndZapCall;

  constructor(call: CreateAndZapCall) {
    this._call = call;
  }

  get _zappee(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _wrapper(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class CreateAndZapCall__Outputs {
  _call: CreateAndZapCall;

  constructor(call: CreateAndZapCall) {
    this._call = call;
  }
}
