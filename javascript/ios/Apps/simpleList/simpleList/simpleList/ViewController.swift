//
//  ViewController.swift
//  simpleList
//
//  Created by Baber M (FCES) on 04/02/2020.
//  Copyright © 2020 Baber M (FCES). All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource {
    
    let list = ["bulldog", "collie", "frenchie", "pom"]
    
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

