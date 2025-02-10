package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@Data
public abstract class Bookmark  extends AbstractDomainClass{

	private static final long serialVersionUID = 1L;
 	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
	private String title;

	@Column(name="profileurl")
	private String profileUrl;


	@ManyToOne
	@JoinColumn(name = "shared_by_userid")
	private User sharedBy;

  public abstract String getItemData();

  public abstract boolean isWeb3Link();

//
//	public Bookmark(long id, String title, String profileUrl) {
//		this.id = id;
//		this.title = title;
//		this.profileUrl = profileUrl;
//	}
//
//	public Bookmark() {
//
//	}
//
//	public long getId() {
//		return id;
//	}
//
//	public void setId(long id) {
//		this.id = id;
//	}
//
//	public String getTitle() {
//		return title;
//	}
//
//	public void setTitle(String title) {
//		this.title = title;
//	}
//
//	public String getProfileUrl() {
//		return profileUrl;
//	}
//
//	public void setProfileUrl(String profileUrl) {
//		this.profileUrl = profileUrl;
//	}
//
//	public boolean isWeb3Link() {
//		return false;
//	}
//
//	public User getSharedBy() {
//		return sharedBy;
//	}
//    public void setSharedBy(User sharedBy) {
//	this.sharedBy = sharedBy;
//    }
//	@Override
//	public String toString() {
//		return "Bookmark [id=" + id + ", title=" + title + ", profileUrl=" + profileUrl + "]";
//	}

}
