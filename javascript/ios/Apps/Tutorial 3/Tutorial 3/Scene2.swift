import UIKit

class Scene2: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        Scene2Label.text = labelText

        // Do any additional setup after loading the view.
    }
    
    @IBOutlet weak var Scene2Label: UILabel!
    
    var labelText: String?
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
