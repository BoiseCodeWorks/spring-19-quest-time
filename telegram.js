let message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae illo, non tempore voluptas esse voluptate dolorem expedita laudantium labore eveniet. Suscipit, accusamus dolor voluptatibus quas molestiae quae perspiciatis ipsum id natus. Voluptatibus doloribus consectetur cupiditate reprehenderit veritatis ipsam vitae tempora reiciendis sed repudiandae expedita dolorem natus distinctio, molestiae corporis officia, eligendi vero quae ratione eos ut laboriosam laudantium veniam dicta. Optio laudantium officiis eius, quisquam soluta molestias, enim obcaecati consequuntur adipisci doloremque ad officia explicabo voluptatibus omnis ipsa veniam, aspernatur voluptas modi nesciunt eos hic aperiam totam! Quidem ullam veritatis in temporibus praesentium sunt consequatur voluptatem. Earum eius suscipit necessitatibus porro dolorum iste perspiciatis laudantium quae! Consectetur distinctio eaque maiores neque atque! Laudantium, dolorem aliquid quos vero, quis velit fugiat quam debitis, ratione ex corporis doloremque necessitatibus maxime dolorum. Unde libero exercitationem perferendis nobis corporis tenetur neque mollitia minus accusantium. Alias ipsa facilis fugit recusandae laudantium, id enim quasi eos obcaecati totam! Pariatur ipsam enim molestiae qui adipisci unde natus animi dignissimos totam odit. Modi neque blanditiis nesciunt rerum. Possimus itaque sequi ducimus, asperiores in consectetur placeat quae delectus hic minus quidem distinctio, excepturi cum voluptates eum! Cum, vitae minima saepe exercitationem deserunt qui maiores debitis officiis eius dolores commodi deleniti explicabo ad recusandae ex optio animi? Rerum fugit dolores cum dignissimos repudiandae laboriosam, quia quod. Quaerat facere aperiam deleniti! Iure minus et impedit voluptatibus quo quas reprehenderit ipsam quae accusantium earum eligendi, sint magnam exercitationem maiores incidunt recusandae mollitia rem temporibus, facilis ea. Explicabo officiis commodi corporis doloremque quo doloribus sit eveniet facere repellat a, quod eius vero ipsa nihil libero cum, accusantium voluptatum sequi voluptatem aperiam. Temporibus officia odit harum quia ut nihil magni doloribus, ipsa esse accusamus ducimus error dolore deleniti tempore ratione animi at nemo quos vel facilis eius dolorum consectetur quas? Dolores eum officia perspiciatis at, sint et autem quasi adipisci, libero sapiente cumque dolor maiores commodi nisi praesentium expedita omnis ea possimus ab, quae ipsam voluptas! Dignissimos ut ipsa soluta quidem nihil dicta ea architecto, animi expedita, fugit rerum. Nemo veritatis aspernatur expedita distinctio earum impedit dolorem totam at placeat hic unde alias quam, harum tempore nisi tempora libero asperiores excepturi eligendi? Eum sed quod perferendis odio architecto sequi minus ea! Magni tempore earum iste laborum suscipit ab odio maiores, porro dignissimos, impedit pariatur?"

function makeTelegram(message, num) {
  let out = []

  let str = message
  while (str.length >= num) {
    let lastChar = str[num]
    let cutNum = num
    for (let i = 0; lastChar != " "; i++) {
      lastChar = str[num - i]
      cutNum = num - i
    }
    let line = str.slice(0, cutNum)
    out.push(line)
    str = str.slice(cutNum)
  }

  out.push(str)
  return out

}

function makeTelegram2(message, num) {
  let words = message.split(' ')

  let line = ''
  let messages = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (line.length + word.length + 1 <= num) {
      if (!word.length) {
        line += word
      } else {
        line += (" ") + word
      }
    }
    messages.push(line)
    line = ''
  }

  return messages

}

