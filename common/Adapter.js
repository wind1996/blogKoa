const util = require('./util');

class Adapter {
    articleAdapter(data) {
        let pre_next = {};
        if (data.pre) {
            pre_next.pre = {
                href: `/article/${data.pre.index}`,
                title: data.pre.title
            }
        }
        if (data.next) {
            pre_next.next = {
                href: `/article/${data.next.index}`,
                title: data.next.title
            }
        }
        return {
            body: (data.currentContent && data.currentContent.content) || '',
            title: data.current.title,
            auth: data.current.auth,
            created_time: data.current.updatedAt,
            updated_time: util.formatDate(data.current.updatedAt),
            header: data.template.filter(x => x.position === 'top').map(x => x.html.content),
            footer: data.template.filter(x => x.position === 'bottom').map(x => x.html.content),
            category: data.current.relation_tags.map(x => {
                return {
                    href: `/tag/${x.tag.key_word}`,
                    name: x.tag.title
                }
            }),
            ...pre_next
        }
    }

    originListAdapter(data) {
        return data.map(x => {
            return {
                href: `/article/${x.index}`,
                title: x.title,
                content: x.description,
                count: (x.click && x.click.click_count) || 0,
                bg: x.bg_url,
                category: x.relation_tags.map(xx => {
                    return {
                        href: `/tag/${xx.tag.key_word}`,
                        name: xx.tag.title
                    }

                })
            }
        })
    }

    articleThroughTagAdapter(data) {
        return data.map(x => {
            return {
                href: `/article/${x.article.index}`,
                title: x.article.title,
                content: x.article.description,
                count: x.article.click_count,
                bg: x.article.bg_url,
                category: x.article.relation_tags.map(xx => {
                    return {
                        href: `/tag/${xx.tag.key_word}`,
                        name: xx.tag.title
                    }

                })
            }
        })
    }

    linkTypeFilterAdapter(data) {
        let type = new Set(data.map(x => x.type));
        let result_list = [];
        for (let value of type.values()) {
            result_list.push({
                title: value,
                links: data.filter(x => {
                    return x.type === value
                })
            })
        }
        return result_list;
    }

    linkAdapter(data) {
        return data.map(x => {
            return {
                href: x.url, name: x.title, color: x.color
            }
        })
    }

    recommendAdapter(data) {
        return data.map(x => {
            return {
                title: x.title,
                from: x.source,
                detail: x.description,
                href: x.url
            }
        })
    }

    recommendStatisticsAdapter(data) {
        return data.map(x => {
            return {
                title: x.title,
                from: x.source,
                detail: x.description,
                href: x.url
            }
        })
    }

    tagAdapter(data) {
        return data.map(x => {
            return {
                href: `/tag/${x.key_word}`,
                name: x.title,
                color: x.color
            };
        })
    }

    labAdapter(data) {
        return data.map(x => {
            return {
                href: x.url,
                title: x.title,
                content: x.description,
                bg: x.bg_url
            }
        })
    }
}

module.exports = new Adapter();