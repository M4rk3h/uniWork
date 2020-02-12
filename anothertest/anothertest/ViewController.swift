//
//  ViewController.swift
//  anothertest
//
//  Created by Daniel Cunliffe on 11/02/2020.
//  Copyright © 2020 Daniel Cunliffe. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    let list = ["koala", "lion", "rhino", "toucan"]
    
    public func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return(list.count)
    }
    
    public func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath) as! ViewControllerTableViewCell
        
        tableView.rowHeight = 100
        
        cell.myImage.image = UIImage(named: (list[indexPath.row] + ".jpeg"))
        
        cell.myLabel.text = list[indexPath.row]
        
        return(cell)
        
        
    }
    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

