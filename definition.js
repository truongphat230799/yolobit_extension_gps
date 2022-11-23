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
    var tx = block.getFieldValue('tx_pin');
    var rx = block.getFieldValue('rx_pin');
    Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
    Blockly.Python.definitions_['import_yolobit_gps'] = 'from yolobit_gps import *';
    Blockly.Python.definitions_['create_uart'] = 'uart = machine.UART(1, baudrate=9600, rx=' + rx + '.pin, tx=' + tx + '.pin, bits=8, parity=None, stop=1, timeout=5000, rxbuf=1024)';
    Blockly.Python.definitions_['create_gps'] = 'gps = MicropyGPS()';
    // TODO: Assemble Python into code variable.
    var code = '';
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
                    "giờ(GMT)",
                    "timestamp[0]"
                  ],
                  [
                    "phút(GMT)",
                    "timestamp[1]"
                  ],
                  [
                    "giây(GMT)",
                    "timestamp[2]"
                  ],
                  [
                    "vĩ độ",
                    "latitude_string()"
                  ],
                  [
                    "kinh độ",
                    "longitude_string()"
                  ],
                  [
                    "độ cao",
                    "altitude"
                  ],
                  [
                    "số vệ tinh tìm được",
                    "satellites_in_use"
                  ],
                  [
                    "ngày, tháng, năm (GMT)",
                    "date_string('long')"
                  ],
                  [
                    "tốc độ gió",
                    "speed_string()"
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
        var value = block.getFieldValue('value');
        // TODO: Assemble Python into code variable.
        
        var code = 'gps.' + value + '\n';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_NONE];
      };

    Blockly.Blocks['yolobit_gps_update'] = {
        init: function() {
            this.jsonInit(
                {
                    "type": "yolobit_gps_update",
                    "message0": "cập nhập thông tin GPS",
                    "previousStatement": null,
                    "nextStatement": null,
                    "colour": "#006666",
                    "tooltip": "",
                    "helpUrl": ""
                  }
            );
                }
            };
    
    Blockly.Python['yolobit_gps_update'] = function(block) {
        // TODO: Assemble Python into code variable.
        var code = 'buf = uart.readline()\n' + 'for char in buf:'+'\n'+ '\tgps.update(chr(char))\n';
        return code;
        };