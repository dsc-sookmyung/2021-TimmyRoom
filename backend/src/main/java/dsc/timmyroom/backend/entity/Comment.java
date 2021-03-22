package dsc.timmyroom.backend.entity;

import javax.persistence.*;

@Entity
@Table(name="comment")
public class Comment {

    @Id
    @Column(name="comment_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long comment_id;

    @Column(name="board_id")
    private long board_id;

    @Column(name="comment_writer")
    private long comment_writer;

    @Column(name="comment_content")
    private String comment_content;

    public Comment(long board_id, long comment_writer, String comment_content){
        super();
        this.board_id = board_id;
        this.comment_writer = comment_writer;
        this.comment_content = comment_content;
    }


    public long getComment_id() {
        return comment_id;
    }

    public void setComment_id(long comment_id) {
        this.comment_id = comment_id;
    }

    public long getBoard_id() {
        return board_id;
    }

    public void setBoard_id(long board_id) {
        this.board_id = board_id;
    }

    public long getComment_writer() {
        return comment_writer;
    }

    public void setComment_writer(long comment_writer) {
        this.comment_writer = comment_writer;
    }

    public String getComment_content() {
        return comment_content;
    }

    public void setComment_content(String comment_content) {
        this.comment_content = comment_content;
    }
}
