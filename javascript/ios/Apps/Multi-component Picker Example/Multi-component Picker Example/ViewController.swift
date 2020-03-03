//
//  ViewController.swift
//  Multi-component Picker Example
//
//  Created by Baber M (FCES) on 03/03/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class ViewController: UIViewController, UIPickerViewDataSource, UIPickerViewDelegate {
    
    // Label
    @IBOutlet weak var selectedCode: UILabel!
    // Picker
    @IBOutlet weak var codePicker: UIPickerView!
    
    // Array
    var pickerData = [
        ["1", "2", "3", "4", "5", "6", "7"],
        ["a", "b", "c", "d", "e", "f"],
        ["!", "+", "%", "*"],
        ["w", "x", "y", "z"]
    ]
    
    // currentCode
    var theCode = ["-","-","-","-"]
    
    
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return pickerData.count
    };
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return pickerData[component].count
    }
    
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int)-> String?{
        return pickerData[component][row]
    }
    
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        theCode[component] = pickerData[component][row]
        selectedCode.text = makeString()
    }
    
    // Convert string
    func makeString() -> String{
        var tempString = ""
        for i in theCode{
            tempString += i
        }
        return tempString
    };
    
    // On Load
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        self.codePicker.delegate = self
        self.codePicker.dataSource = self
        selectedCode.text = makeString()
    };


}

