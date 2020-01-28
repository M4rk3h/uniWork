//
//  Scene2ViewController.swift
//  SeguesBaby
//
//  Created by Baber M (FCES) on 28/01/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class Scene2ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        
        scene2Labels.text = labelText
    }
       
    var labelText: String?
    
    @IBOutlet weak var scene2Labels: UILabel!
    /*
     
     // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
