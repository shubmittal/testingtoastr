import Controller from '@ember/controller';
import toastr from "toastr";

export default Controller.extend({

    actions:
        {
            doSomething() {
                alert("Now raising toast");
                toastr.success("Raised a toast");
            }
        }
});
