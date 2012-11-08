// this sets the background color of the master UIView (when there are no windows/tab groups on it)
var win=Titanium.UI.currentWindow;

//Creating List Icon (3 icon in 1 row)\
var pathimage='Images/'
var	ListIcons=[
		{color1:'blue',icon1:pathimage+'icon1.png',subtitle1:'Danh sách',color2:'red',icon2:pathimage+'icon2.png',subtitle2:'Tìm kiếm',color3:'green',icon3:pathimage+'icon3.png',subtitle3:'Công ty'},
		{color1:'red',icon1:pathimage+'icon1.png',subtitle1:'Danh sách',color2:'green',icon2:pathimage+'icon2.png',subtitle2:'Tìm kiếm',color3:'yellow',icon3:pathimage+'icon3.png',subtitle3:'Công ty'},
		{color1:'yellow',icon1:pathimage+'icon1.png',subtitle1:'Danh sách',color2:'red',icon2:pathimage+'icon2.png',subtitle2:'Tìm kiếm',color3:'blue',icon3:pathimage+'icon3.png',subtitle3:'Công ty'},
]
/*
var rowData = [];
	//Ti.API.info('HIEN RA XEM'+ListIcons[0].color1)
for(i=0;i<1;i++);
{
    var row = Ti.UI.createTableViewRow();
    var view1 = Ti.UI.createView({
        left : 0,
        width : "33,33%",
        height:100,
        backgroundColor : ListIcons[0].color1//"blue"
    });
    var view2 = Ti.UI.createView({
        left : "33.33%",
        width : "33.33%",
        height:100,
        backgroundColor : ListIcons[0].color2//"red"
    });
    var view3 = Ti.UI.createView({
        left : "66.66%",
        width : "33.33%",
        height:100,
        backgroundColor : ListIcons[0].color3//"green"
    });
   
    row.add(view1);
    row.add(view2);
    row.add(view3);
  
    rowData.push(row);
    
}
Ti.API.info('HIEN RA XEM     '+rowData)
var tblview = Ti.UI.createTableView({
    data : rowData,
    top : 0,
    
});

win.add(tblview)
*/

var button = Ti.UI.createButton({
    title: 'Edit',
    style: Ti.UI.iPhone.SystemButtonStyle.DONE,
});

var toolbar = Ti.UI.iOS.createToolbar({
    items:[button],
    top: 0
});
win.add(toolbar);

var label = Ti.UI.createLabel({
  color: 'white',
  font: { fontSize: 14 },
  text: 'Click an item to reset badge\nPress and hold an item to enable edit mode',
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 55,
  height: 40,
  width: 300
});
win.add(label);

var dashboardData = [];
var itemData = [
  { name: 'account', badge: 10 },
  { name: 'cases', badge: 2 },
  { name: 'calls', badge: 2 },
  { name: 'contacts', badge: 5},
  { name: 'emps' }, 
  { name: 'leads' },
  { name: 'meetings', badge: 3 },
  { name: 'opps',  badge:  126 }, // badge will be displayed as "99+"
  { name: 'tasks' }
];

for (var i=0, ilen=itemData.length; i<ilen; i++){
  var item = Ti.UI.createDashboardItem({
    badge: itemData[i].badge,
    image: '/images/dashboard/' + itemData[i].name + '_off.png',
    selectedImage: '/images/dashboard/' + itemData[i].name + '_on.png',
    label: itemData[i].name
  });
  dashboardData.push(item);
}

var dashboard = Ti.UI.createDashboardView({
  data: dashboardData,
  wobble: true,
  top: 100
});
win.add(dashboard);

var isEditable = false;

button.addEventListener('click', function(e){
  if(isEditable){
    dashboard.stopEditing();
  } else {
    dashboard.startEditing();
  }
});

dashboard.addEventListener('edit',function(e){
  button.title = 'Done';
  button.style = Ti.UI.iPhone.SystemButtonStyle.DONE;
  isEditable = true;
});

dashboard.addEventListener('commit',function(e){
  button.title = 'Edit';
  button.style = Ti.UI.iPhone.SystemButtonStyle.PLAIN;
  isEditable = false;
});

dashboard.addEventListener('click', function(e){
  e.item.badge = 0;
});
