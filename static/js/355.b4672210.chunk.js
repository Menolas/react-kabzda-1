"use strict";(self.webpackChunkreact_kabzda_1=self.webpackChunkreact_kabzda_1||[]).push([[355],{6638:function(t,e,s){s.r(e),s.d(e,{default:function(){return z}});var o=s(5671),r=s(3144),a=s(136),i=s(2882),n=s(8683),l=s(2791),c=s(6871),f=s(8687),u="Profile_profile__Jr4rJ",p="Profile_background__QUfAd",d={profileInfo:"ProfileInfo_profileInfo__bMHEa",profileInfoBlock:"ProfileInfo_profileInfoBlock__89iqc",avatar:"ProfileInfo_avatar__d7FlB",name:"ProfileInfo_name__-nzbT",lookingForJob:"ProfileInfo_lookingForJob__UHUZD",socialContactsList:"ProfileInfo_socialContactsList__RZWTx",socialContactsItem:"ProfileInfo_socialContactsItem__lQVap",profileStatus:"ProfileInfo_profileStatus__hH4m5"},h=s(4131),m=s(4241),x=s(885),j=s(184),_=function(t){var e=(0,l.useState)(!1),s=(0,x.Z)(e,2),o=s[0],r=s[1],a=(0,l.useState)(t.status),i=(0,x.Z)(a,2),n=i[0],c=i[1];(0,l.useEffect)((function(){c(t.status)}),[t.status]);return(0,j.jsxs)("div",{className:d.profileStatus,children:[!o&&(0,j.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"-------"}),o&&(0,j.jsx)("div",{children:(0,j.jsx)("input",{onChange:function(t){c(t.currentTarget.value)},value:n,autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(n)}})})]})},g=function(t){return t.profile?(0,j.jsxs)("div",{className:d.profileInfo,children:[(0,j.jsx)("div",{className:d.avatar,children:(0,j.jsx)("img",{src:t.profile.photos&&t.profile.photos.small&&null!==t.profile.photos.small?t.profile.photos.small:m,alt:""})}),(0,j.jsx)("div",{className:d.name+" "+d.profileInfoBlock,children:t.profile.fullName}),(0,j.jsx)(_,{status:t.status,updateStatus:t.updateStatus}),(0,j.jsxs)("div",{className:d.lookingForJob+" "+d.profileInfoBlock,children:[(0,j.jsx)("span",{children:t.profile.lookingForAJob?"Searching for Job":"Not Searching for Job"}),(0,j.jsx)("span",{children:t.profile.lookingForAJobDescription})]}),(0,j.jsx)("div",{className:d.socialContacts+" "+d.profileInfoBlock,children:(0,j.jsxs)("ul",{className:d.socialContactsList,children:[t.profile.contacts.facebook?(0,j.jsx)("li",{className:d.socialContactsItem,children:(0,j.jsx)("a",{href:t.profile.contacts.facebook,target:"_blank",rel:"noreferrer",children:"FB"})}):"",t.profile.contacts.website?(0,j.jsx)("li",{className:d.socialContactsItem,children:(0,j.jsx)("a",{href:t.profile.contacts.website,target:"_blank",rel:"noreferrer",children:"WB"})}):"",t.profile.contacts.vk?(0,j.jsx)("li",{className:d.socialContactsItem,children:(0,j.jsx)("a",{href:t.profile.contacts.vk,target:"_blank",rel:"noreferrer",children:"VK"})}):"",t.profile.contacts.twitter?(0,j.jsx)("li",{className:d.socialContactsItem,children:(0,j.jsx)("a",{href:t.profile.contacts.twitter,target:"_blank",rel:"noreferrer",children:"TW"})}):"",t.profile.contacts.instagram?(0,j.jsx)("li",{className:d.socialContactsItem,children:(0,j.jsx)("a",{href:t.profile.contacts.instagram,target:"_blank",rel:"noreferrer",children:"IN"})}):"",t.profile.contacts.youtube?(0,j.jsx)("li",{className:d.socialContactsItem,children:(0,j.jsx)("a",{href:t.profile.contacts.youtube,target:"_blank",rel:"noreferrer",children:"YB"})}):"",t.profile.contacts.github?(0,j.jsx)("li",{className:d.socialContactsItem,children:(0,j.jsx)("a",{href:t.profile.contacts.github,target:"_blank",rel:"noreferrer",children:"GB"})}):"",t.profile.contacts.mainLink?(0,j.jsx)("li",{className:d.socialContactsItem,children:(0,j.jsx)("a",{href:t.profile.contacts.mainLink,target:"_blank",rel:"noreferrer",children:"ML"})}):""]})}),(0,j.jsx)("div",{className:d.aboutMe+" "+d.profileInfoBlock,children:(0,j.jsx)("p",{children:t.profile.aboutMe})})]}):(0,j.jsx)(h.Z,{})},k=s(6070),b={newPost:"MyPosts_newPost__3PhR6",postsList:"MyPosts_postsList__vgLuA"},P="Post_item__xlp0p",v="Post_itemContent__iW0E1",I="Post_itemLike__0otOk",N=s.p+"static/media/ichigo.21898d746af2d9ad1dde.jpg",C=function(t){return(0,j.jsxs)("li",{className:P,children:[(0,j.jsx)("img",{src:N,alt:""}),(0,j.jsxs)("div",{className:v,children:[t.message,(0,j.jsx)("span",{className:I,children:t.likesCount})]})]})},S=s(6139),Z=s(704),w=s(5304),y=s(5271),B=(0,w.D)(50),A=(0,Z.Z)({form:"ProfileAddNewPostForm"})((function(t){return(0,j.jsxs)("form",{onSubmit:t.handleSubmit,children:[(0,j.jsx)(S.Z,{rows:"10",component:y.g,name:"newPostText",validate:[w.C,B],placeholder:"Write your next post here"}),(0,j.jsx)("button",{children:"Add post"})]})})),L=l.memo((function(t){var e=t.profilePage.posts.map((function(t){return(0,j.jsx)(C,{message:t.message,likesCount:t.likesCount},t.id)}));return(0,j.jsxs)("div",{className:b.myPosts,children:[(0,j.jsx)("h3",{children:"My posts"}),(0,j.jsx)("div",{className:b.newPost,children:(0,j.jsx)(A,{onSubmit:function(e){t.addPost(e.newPostText)}})}),(0,j.jsx)("ul",{className:b.postsList,children:e})]})})),F=(0,f.$j)((function(t){return{profilePage:t.profilePage,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t((0,k.Pi)(e))}}}))(L),J=s.p+"static/media/portfolio-background.ea5c5be245db5540915f.jpg",M=function(t){return(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("div",{className:p,children:(0,j.jsx)("img",{src:J,alt:""})}),(0,j.jsx)(g,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,j.jsx)(F,{})]})},T=s(1548),U=s(7781),D=function(t){(0,a.Z)(s,t);var e=(0,i.Z)(s);function s(){return(0,o.Z)(this,s),e.apply(this,arguments)}return(0,r.Z)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,j.jsx)(M,(0,n.Z)((0,n.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(l.Component),z=(0,U.qC)((0,f.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:k.et,getStatus:k.lR,updateStatus:k.Nf}),(function(t){return function(e){var s={params:(0,c.UO)()};return(0,j.jsx)(t,(0,n.Z)((0,n.Z)({},e),{},{match:s}))}}),T.D)(D)},1548:function(t,e,s){s.d(e,{D:function(){return d}});var o=s(8683),r=s(5671),a=s(3144),i=s(136),n=s(2882),l=s(2791),c=s(8687),f=s(6871),u=s(184),p=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var e=function(e){(0,i.Z)(l,e);var s=(0,n.Z)(l);function l(){return(0,r.Z)(this,l),s.apply(this,arguments)}return(0,a.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,u.jsx)(t,(0,o.Z)({},this.props)):(0,u.jsx)(f.Fg,{to:"/login"})}}]),l}(l.Component);return(0,c.$j)(p)(e)}}}]);
//# sourceMappingURL=355.b4672210.chunk.js.map