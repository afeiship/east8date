import { ID_NAME_PAIRS } from '@/shared/constants';

const PROCESS_LIST = ['skuPropList', 'spuPropList', 'generalPropList'];

export default class ProductData {
  // from response
  static from(inData) {
    PROCESS_LIST.forEach((key) => (inData[key] = this.fromList(inData[key])));
    return inData;
  }

  // for submit
  static to(inData) {
    PROCESS_LIST.forEach((key) => (inData[key] = this.toList(inData[key])));
    return inData;
  }

  /**
   * ENUMS、BRAND、MATERIAL、COLOR  取 valueIdArray
   * TEXT, P_CODE, G_CODE  取ext1
   * @param inItems
   */

  public static fromList(inItems) {
    return inItems.map((item) => {
      const {
        __prop__: { id, required, valueType, multiple, name, propValueList },
        ext1,
        valueIdArray
      } = item;

      const isEnumType = ['ENUMS', 'BRAND', 'MATERIAL', 'COLOR'].includes(valueType);
      if (isEnumType) {
        item.__ui__ = {
          id,
          required,
          type: 'enum',
          label: name,
          multiple,
          value: valueIdArray,
          items: nx.keyMap(propValueList, ID_NAME_PAIRS)
        };
      } else {
        item.__ui__ = {
          id,
          required,
          type: 'text',
          label: name,
          value: ext1
        };
      }
      return item;
    });
  }

  public static toList(inItems) {
    return inItems.map((item) => {
      const data = item.__ui__;
      const { type, value, id } = data;
      const valueKey = type === 'enum' ? 'valueIdArray' : 'ext1';
      item[valueKey] = value;
      item.propId = id;
      return item;
    });
  }
}
