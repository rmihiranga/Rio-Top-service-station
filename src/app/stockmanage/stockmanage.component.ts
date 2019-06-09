import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-stockmanage',
  templateUrl: './stockmanage.component.html',
  styleUrls: ['./stockmanage.component.sass']
})
export class StockmanageComponent implements OnInit {

  stockitems: any;
  finishedstockitems: any;
  deleteMessage: string;
  closeResult: string;

  constructor(private _stockservice: StockService, private modalService: NgbModal) { }

  ngOnInit() {
    this.deleteMessage = "";

    this._stockservice.getstock()
      .subscribe((stock) => {
        this.stockitems = stock;
      })

    this._stockservice.getfinisheditems()
      .subscribe((fstock) => {
        this.finishedstockitems = fstock;
      })

  }

  addItem(form) {
    form.value.availableAmount = form.value.itemAmount;
    var formData = form.value;
    this._stockservice.addStock(formData);
    alert("Successfully added an item!");
    document.forms['form_stock_add'].reset();
    this.stockitems.splice(0, 0, formData);  //add to table ui without reloading the table  


  }


  reduceItem(form) {

    this._stockservice.getstock()
      .subscribe((stock) => {
        this.stockitems = stock;
        console.log(stock);
      });


    var formData = form.value;

    /*used a setTimeout to give the time to get the stock items from DB otherwise for loop will execute first*/
    /*updating stock table without reloading*/
    setTimeout(() => {
      for (let i = 0; i < this.stockitems.length; ++i) {
        if (this.stockitems[i].itemID === formData.itemID) {
          this.stockitems[i].availableAmount -= formData.itemAmount;
          console.log(this.stockitems[i]._id);
          this._stockservice.updatestock(this.stockitems[i]._id, this.stockitems[i].availableAmount);
          break
        }
      }
    }, 2000);

    /*need to get all the stock items before updating, reason: if we try to update an item without refreshing after adding
    that stockitems array doesn't contain the _id of the newly added item*/
  }

  deleteItem(itemid) {
    var r = confirm("Do you really want to remove this item from the stock?");

    if (r == true) {
      /*removing from table(UI) without reloading the table*/
      for (let i = 0; i < this.stockitems.length; ++i) {
        if (this.stockitems[i]._id === itemid) {
          this.stockitems.splice(i, 1);
        }
      }

      /*deleting in the database*/
      this._stockservice.deletestock(itemid).subscribe(res => {
        console.log("deleted");
        this.deleteMessage = "item removed";
      });
    } else { }
  }

  /*bootstrap Modal component*/
  openLg(content) {
    this.modalService.open(content, { size: 'lg' })
  }

  updateItem(id,form){
    var formData = form.value;
    console.log(formData.itemName);
    this._stockservice.updateItemInfo(id,formData);
  }

  /*change colors in notification bars*/
  getColor(limit) {
    switch (limit % 4) {
      case 0:
        return '#9f093e';
      case 1:
        return '#006a35';
      case 2:
        return '#004080';
      case 3:
        return '#770077';
    }
  }

}
