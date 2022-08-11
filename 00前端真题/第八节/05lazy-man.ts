/**
 * @description lazy man
 */

class LazyMan {
    private name: string;
    private tasks: Function[] = []; // 任务列表

    constructor(name: string) {
        this.name = name;
    }

    // next
    next() {
        const task = this.tasks.shift(); // 取出当前 tasks 第一个任务
        if (task) {
            task();
        }
    }

    eat(food: string) {
        const task = () => {
            console.log(`${this.name} is eating ${food}`);
            // 立即执行下一个任务
            this.next();
        }
        this.tasks.push(task);

        return this; // 链式调用
    }

    sleep(seconds: number) {
        const task = () => {
            console.log(`${this.name} 开始睡觉`);
            setTimeout(() => {
                console.log(`${this.name} 已经睡完了 ${seconds} 秒, 继续工作`);
                this.next(); // xx 秒后执行下一个任务
            }, seconds * 1000);
        }
        this.tasks.push(task);

        return this // 链式调用
    }
}

const me = new LazyMan('大帅比');
me.eat('面包').sleep(2).eat('鸡腿').next();