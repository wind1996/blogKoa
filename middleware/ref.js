const model = require('./model');

model.article.hasOne(model.article_content);
model.article_content.belongsTo(model.article);

model.article.hasMany(model.relationship_tag);
model.relationship_tag.belongsTo(model.article);

model.tag.hasMany(model.relationship_tag);
model.relationship_tag.belongsTo(model.tag);

model.article.hasMany(model.relationship_album);
model.relationship_album.belongsTo(model.article);

model.album.hasMany(model.relationship_album);
model.relationship_album.belongsTo(model.album);

model.article.hasMany(model.relationship_html);
model.relationship_html.belongsTo(model.article);

model.html.hasMany(model.relationship_html);
model.relationship_html.belongsTo(model.html);


model.article.hasOne(model.click);
model.click.belongsTo(model.article);

model.article.hasOne(model.like);
model.like.belongsTo(model.article);
