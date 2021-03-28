package dsc.timmyroom.backend.entity;

import javax.persistence.*;

@Entity
@Table(name="board")
public class Board {
    @Id
    @Column(name="board_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long board_id;

    @Column(name="category")
    private Integer category;

    @ManyToOne
    @JoinColumn(name="user_id")
    private long writer;

    @Column(name="title")
    private String title;

    @Column(name="content")
    private String content;

    public Board(Integer category, long writer, String title, String content) {
        super();
        this.category = category;
        this.writer = writer;
        this.title = title;
        this.content = content;
    }


    public long getBoard_id() {
        return board_id;
    }

    public void setBoard_id(long board_id) {
        this.board_id = board_id;
    }

    public Integer getCategory() {
        return category;
    }

    public void setCategory(Integer category) {
        this.category = category;
    }

    public User getWriter() {
        return writer;
    }

    public void setWriter(User writer) {
        this.writer = writer;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
