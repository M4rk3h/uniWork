//
//  ViewController.swift
//  UIPicker
//
//  Created by Baber M (FCES) on 03/03/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource {
    
    // Create array for items to pick from
    var pickerDataSource = ["Item 1","Item 2","Item 3","Item 4"]
    // Label
    @IBOutlet weak var chosenOne: UILabel!
    // Picker
    @IBOutlet weak var myPickerView: UIPickerView!
    
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1
    }
    
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        return pickerDataSource.count
    }
    
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        return pickerDataSource[row]
    }
    
    // Function to pick
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        switch row{
        case 0:
            chosenOne.text = "One"
        case 1:
            chosenOne.text = "Two"
        case 2:
            chosenOne.text = "Three"
        case 3:
            chosenOne.text = pickerDataSource[row]
        default:
            chosenOne.text = "None"
        }
    }
  
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        self.myPickerView.dataSource = self
        self.myPickerView.delegate = self
    }


}

