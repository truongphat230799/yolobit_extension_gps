Blockly.Blocks['yolobit_gps_create'] = {
    init: function() {
      this.jsonInit(

        {
            "type": "yolobit_gps_create",
            "message0": "khởi tạo GPS chân TX %1 chân RX %2",
            "args0": [
            {
                "type": "field_dropdown",
                "name": "tx_pin",
                "options": [
                [
                    "P0",
                    "pin0"
                ],
                [
                    "P1",
                    "pin1"
                ],
                [
                    "P2",
                    "pin2"
                ],
                [
                    "P3",
                    "pin3"
                ],
                [
                    "P4",
                    "pin4"
                ],
                [
                    "P5",
                    "pin5"
                ],
                [
                    "P6",
                    "pin6"
                ],
                [
                    "P7",
                    "pin7"
                ],
                [
                    "P8",
                    "pin8"
                ],
                [
                    "P9",
                    "pin9"
                ],
                [
                    "P10",
                    "pin10"
                ],
                [
                    "P11",
                    "pin11"
                ],
                [
                    "P12",
                    "pin12"
                ],
                [
                    "P13",
                    "pin13"
                ],
                [
                    "P14",
                    "pin14"
                ],
                [
                    "P15",
                    "pin15"
                ],
                [
                    "P16",
                    "pin16"
                ]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "rx_pin",
                "options": [
                [
                    "P0",
                    "pin0"
                ],
                [
                    "P1",
                    "pin1"
                ],
                [
                    "P2",
                    "pin2"
                ],
                [
                    "P3",
                    "pin3"
                ],
                [
                    "P4",
                    "pin4"
                ],
                [
                    "P5",
                    "pin5"
                ],
                [
                    "P6",
                    "pin6"
                ],
                [
                    "P7",
                    "pin7"
                ],
                [
                    "P8",
                    "pin8"
                ],
                [
                    "P9",
                    "pin9"
                ],
                [
                    "P10",
                    "pin10"
                ],
                [
                    "P11",
                    "pin11"
                ],
                [
                    "P12",
                    "pin12"
                ],
                [
                    "P13",
                    "pin13"
                ],
                [
                    "P14",
                    "pin14"
                ],
                [
                    "P15",
                    "pin15"
                ],
                [
                    "P16",
                    "pin16"
                ]
                ]
            }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": "#006666",
            "tooltip": "",
            "helpUrl": ""
        }
      );
    }
};

Blockly.Python['yolobit_gps_create'] = function(block) {
    var dropdown_tx_pin = block.getFieldValue('tx_pin');
    var dropdown_rx_pin = block.getFieldValue('rx_pin');
    // TODO: Assemble Python into code variable.
    var code = '...\n';
    return code;
};

Blockly.Blocks['yolobit_gps_read'] = {
    init: function() {
      this.jsonInit(
        {
            "type": "block_type",
            "message0": "lấy giá trị %1 từ GPS",
            "args0": [
              {
                "type": "field_dropdown",
                "name": "value",
                "options": [
                  [
                    "thời gian",
                    "time"
                  ],
                  [
                    "kinh độ",
                    "lattitude"
                  ],
                  [
                    "vĩ độ",
                    "longtitude"
                  ]
                ]
              }
            ],
            "output": null,
            "colour": "#006666",
            "tooltip": "",
            "helpUrl": ""
          }
      );
        }
    };

    Blockly.Python['yolobit_gps_read'] = function(block) {
        var dropdown_value = block.getFieldValue('value');
        // TODO: Assemble Python into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_NONE];
      };